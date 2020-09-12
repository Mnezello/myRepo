<?php include 'header.php'; ?>
    
<div class="product-page small-11 large-12 columns no-padding small-centered">
    <div class="global-page-container">

        <?php 
            $dishe = $_GET['prato'];
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
                                            
                $sql = "SELECT * from pratos WHERE codigo='$dishe'";
                $result = $dbConnect->query($sql);
                
                if($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                       $disheName = $row['nome'];
                       $disheCategory = $row['categoria'];
                       $disheDescription = $row['descricao'];
                       $dishePrice = $row['preco'];
                       $disheCalories = $row['calorias'];
                    }
                } else {
                    echo 'Página não encontrada.';
                }
            }
        ?>

        <?php if($disheName != NULL) { ?>       
            <div class="product-section">
                <div class="product-info small-12 large-5 columns no-padding">
                    <h3><?php echo $disheName; ?></h3>
                    <h4><?php echo $disheCategory; ?></h4>
                    <p><?php echo $disheDescription; ?></p>
                    <h5><b>Preço: </b>R$ <?php echo $dishePrice; ?></h5>
                    <h5><b>Calorias: </b><?php echo $disheCalories; ?></h5> 
                </div>
                <div class="product-picture small-12 large-7 columns no-padding">
                    <img src="img/cardapio/<?php echo $dishe; ?>.jpg" alt="prato">
                </div>
            </div>
        <?php } ?>

        <div class="go-back small-12 columns no-padding">
            <a href="cardapio.php"><< Voltar ao Cardápio</a>
        </div>
    </div>
</div>
    
<?php include 'footer.php'; ?>