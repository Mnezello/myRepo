<?php include 'header.php'; ?>

    <div class="welcome-gallery small-12 columns">
        <div class="photo-section small-12 columns">
            <img class="homepage-main-photo" src="img/main-photo.jpg" alt="slider imagem 1">
        </div>
        <div class="main-section-title small-10 columns">
            <div class="table">
                <div class="table-cell">
                    <h1>Bem vindo ao Restô Bar</h1>
                    <h2>A cozinha tradicional na Brasa</h2>
                </div>
            </div>        
        </div>
        <div class="photo-gradient">          
        </div>
    </div>

    <div class="about-us small-11 large-12 columns no-padding small-centered">
        <div class="global-page-container">
            <div id="about-us" class="about-us-title small-12 columns no-padding">
            <h3>Sobre Nós</h3>
            <hr></hr>
            </div>         
                <img src="img/fachada.jpg" alt="fachada do restaurante">          
            <div class="about-us-text">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo mi, 
                condimentum ac convallis non, porta ac nibh. Morbi volutpat nibh lectus, quis 
                convallis nunc rutrum vitae. Aenean volutpat aliquam elementum. Nunc consequat 
                elit odio, vitae suscipit nunc pretium eu. Aenean vitae lacus auctor, condimentum 
                ipsum at, suscipit erat. Donec dapibus ullamcorper bibendum. Vestibulum posuere 
                augue in lectus dictum tincidunt. Pellentesque ornare eget enim sed dignissim. 
                Sed nec nisi suscipit, feugiat risus ac, lacinia elit.
            </p>  
            <p>
                Duis fermentum leo enim, eget dignissim dolor imperdiet at. Sed ut rutrum lacus. 
                Aenean eleifend, urna eu dapibus imperdiet, turpis diam tristique mauris, nec 
                luctus ante massa eu arcu. Duis tempor risus quis tellus posuere eleifend. 
                Donec fringilla nulla ac odio sagittis tincidunt. Phasellus tempus id felis et 
                finibus. Aenean felis ligula, varius nec varius at, feugiat nec felis. Morbi 
                blandit sapien vel justo consequat laoreet.
            </p>
            </div>
        </div>
    </div>

    <div class="cardapio small-11 large-12 columns no-padding small-centered">
        <div class="global-page-container">
            <div class="cardapio-title small-12 columns no-padding">
            <h3>Cardapio</h3>
            <hr></hr>
            </div>
        </div>
        <div class="global-page-container">
            <div class="slider-cardapio">
                <div class="slider-002 small-12 small-centered columns">

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
                                                        
                            $sql = "SELECT * from pratos WHERE destaque=1";
                            $result = $dbConnect->query($sql);
                            
                            if($result->num_rows > 0) {
                                while($row = $result->fetch_assoc()) { ?>
                                    <div class="cardapio-item-outer bounce-hover small-10 medium-4 columns"> 
                                        <div class="cardapio-item">
                                            <a href="prato.php?prato=<?php echo $row['codigo']; ?>">
                                                <div class="cardapio-item-image">
                                                    <img src="img/cardapio/<?php echo $row['codigo']; ?>.jpg" alt="camarao"/>   
                                                </div>
                                                <div class="item-info">
                                                    <div class="title"><?php echo $row['nome']; ?></div>
                                                </div>
                                                <div class="gradient-filter">
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                <?php }
                            } else {
                                echo 'Não há destaques';
                            }
                        }
                    ?>                      
            
                </div>
            </div>
        </div>
    </div>

    <div id="contact-us" class="contact-us small-11 large-12 columns no-padding small-centered">
        <div class="global-page-container">
            <div class="contact-us-title small-12 columns no-padding">
            <h3>Faça a sua reserva</h3>
            <hr></hr>
            </div>
            <div class="reservation-form small-12 columns no-padding">
                <form action="index.php#contact-us" method="post">
                    <div class="form-part1 small-12 large-8 xlarge-7 columns no-padding">
                        <input type="text" name="name" class="field" placeholder="Nome completo" required/>
                        <input type="email" name="email" class="field" placeholder="E-mail" required/>
                        <textarea type="text" name="message" class="field" placeholder="Mensagem"></textarea>
                    </div>

                    <div class="form-part2 small-12 large-3 xlarge-3 end columns no-padding">
                        <input type="text" name="phone" class="field" placeholder="Telefone" required/>
                        <input type="datetime-local" name="date" class="field" placeholder="Data e hora" required/>
                        <input type="text" name="people" class="field" placeholder="Número de pessoas" required/>
                        <input type="submit" name="submit" value="Reservar"/>
                    </div>
                </form>

                <?php
                    require 'phpmailer/Exception.php';
                    require 'phpmailer/PHPMailer.php';
                    require 'phpmailer/SMTP.php';

                    use PHPMailer\PHPMailer\PHPMailer;
                    use PHPMailer\PHPMailer\Exception;

                    function cleanInput($input) {
                        $input = trim($input);
                        $input = stripslashes($input);
                        $input = htmlspecialchars($input);
                        return $input;
                    }

                    if($_SERVER['REQUEST_METHOD'] == 'POST') {
                        $name = $_POST['name'];
                        $email = $_POST['email'];
                        $message = $_POST['message'];
                        $phone = $_POST['phone'];
                        $date = $_POST['date'];
                        $people = $_POST['people'];

                        $name = cleanInput($name);
                        $email = cleanInput($email);
                        $message = cleanInput($message);
                        $phone = cleanInput($phone);
                        $date = cleanInput($date);
                        $people = cleanInput($people);  
                        $textMessage = 'Email enviado do sistema de reserva do site' . '<br><br>' . 
                            'Nome: ' . $name . '<br>' .
                            'E-mail: ' . $email . '<br>' .
                            'Telefone: ' . $phone . '<br>' .
                            'Data: ' . $date . '<br>' .
                            'Número de pessoas: ' . $people . '<br>' .
                            'Mensagem: ' . $message . '<br>';

                        $mail = new PHPMailer(true);
                        $mail->CharSet="UTF-8";

                        try {                            
                            $mail->isSMTP();                                      
                            $mail->Host = 'smtp.gmail.com';
                            $mail->SMTPAuth = true;                               
                            $mail->Username = 'usuário do e-mail';                
                            $mail->Password = 'senha do e-mail';                           
                            $mail->SMTPSecure = 'tls';                         
                            $mail->Port = 587;
                            $mail->SMTPOptions = array(
                                'ssl' => array(
                                    'verify_peer' => false,
                                    'verify_peer_name' => false,
                                    'allow_self_signed' => true
                                )
                            );
                            $mail->setFrom($email, $name);
                            $mail->addAddress('contato@restobar.com.br', 'Restô Bar');
                            $mail->isHTML(true);                                  
                            $mail->Subject = 'Pedido de Reserva';
                            $mail->Body    = $textMessage;
                            $mail->AltBody = $textMessage;
                            $mail->send();
                            $confirm = 'Mensagem enviada com sucesso';
                        } catch (Exception $e) {
                            $confirm = 'A mensagem não pôde ser enviada';
                        }
                    }
                ?> 

            </div>
            
                <?php  if($_SERVER['REQUEST_METHOD'] == 'POST') { ?>
                    <p><?php echo $confirm?></p>
                <?php } ?>
            
        </div>
    </div>

<?php include 'footer.php'; ?>

