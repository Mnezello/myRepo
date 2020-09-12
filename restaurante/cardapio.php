<?php include 'header.php'; ?>

<div class="cardapio-list small-11 large-12 columns no-padding small-centered">
    
    <div class="global-page-container">
        <div class="cardapio-title small-12 columns no-padding">
            <h3>Cardapio</h3>
            <hr></hr>
        </div>

        <?php
            $server = 'localhost';
            $user = 'root';
            $password = '';
            $dbName = 'restaurante';
            $port = '3306';

            $dbConnect = new mysqli($server,$user,$password,$dbName,$port);
            mysqli_set_charset($dbConnect,"utf8");

            if ($dbConnect->connectError) {
                echo 'Connection error: ' . $dbConnect->connectError;
            } else {
                                            
                $sql = "SELECT DISTINCT categoria from pratos";
                $result = $dbConnect->query($sql);
                
                if($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        $category = $row['categoria']; ?>
                        <div class="category-slider small-12 columns no-padding">
                            <h4><?php echo $category?></h4>
                            <div class="slider-cardapio">
                                <div class="slider-002 small-12 small-centered columns">
                                    
                                    <?php
                                        $sql2 = "SELECT * from pratos WHERE categoria='$category'"; 
                                        $result2 = $dbConnect->query($sql2);
                                        if($result2->num_rows > 0) {
                                            while($row2 = $result2->fetch_assoc()) { ?>
                                                <div class="cardapio-item-outer bounce-hover small-10 medium-4 columns"> 
                                                    <div class="cardapio-item">
                                                        <a href="prato.php?prato=<?php echo $row2['codigo']; ?>">
                                                            <div class="item-image">
                                                                <img src="img/cardapio/<?php echo $row2['codigo']; ?>.jpg" alt="prato"/>   
                                                            </div>
                                                            <div class="item-info">
                                                                <div class="title"><?php echo $row2['nome']; ?></div>
                                                            </div>
                                                            <div class="gradient-filter">
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                            <?php }
                                        }
                                    ?>  

                                </div>
                            </div>
                        </div>

                    <?php }
                } else {
                    echo 'Não há pratos';
                }
            }
        ?> 

    </div>
</div>
    
<?php include 'footer.php'; ?>