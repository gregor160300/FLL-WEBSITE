<!DOCTYPE html>
<html>

    <head>
        <link href="../images/favicon.png" rel="icon">
        <link id="materialcolors" rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.blue_grey-light_blue.min.css" /> 
        <link rel="stylesheet" type="text/css" href="../styles/stylesheet.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

        <script src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js"></script>
        <script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="../scripts/colorchanger.js"></script>
        <script type="text/javascript" src="../scripts/footer.js"></script>

        <meta name="description" content="Deze website gaat over de First Lego League (FLL), je vind hier bouw en programmeer instructies, ook vind je er een score formulier." />
        <meta name="keywords" content="FLL First Lego League Programmeren Score Trash Trek " />
        <meta name="author" content="meta-tags generator">
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <!-- Always shows a header, even in smaller screens. -->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header id="test" class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">Contact</span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation. We hide it in small screens. -->
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        <a class="mdl-navigation__link" href="../index.html">Home</a>
                        <a class="mdl-navigation__link" href="scorer.html">Score Formulier</a>
                        <a class="mdl-navigation__link" href="build.html">Bouw Instructies</a>
                        <a class="mdl-navigation__link" href="gyro.html">Gyro Les</a>
                        <a class="mdl-navigation__link thispage" href="contact.php">Contact</a>
                        <a class="mdl-navigation__link" href="over.html">Over</a>
                    </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="../index.html">Home</a>
                    <a class="mdl-navigation__link" href="scorer.html">Score Formulier</a>
                    <a class="mdl-navigation__link" href="build.html">Bouw Instructies</a>
                    <a class="mdl-navigation__link" href="gyro.html">Gyro Les</a>
                    <a class="mdl-navigation__link" href="contact.php">Contact</a>
                    <a class="mdl-navigation__link" href="over.html">Over</a>
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="page-content">

                    <!-- Contact -->
                    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
                        <div id="contact" class="mdl-card__title" style="height: auto;">
                            <h2 class="mdl-card__title-text">Contact Formulier</h2>
                        </div>

                        <?php
                        //if "email" variable is filled out, send email
                        if (isset($_REQUEST['email'])) {

                            //Email information
                            $admin_email = "gschram@protonmail.ch";
                            $email = $_REQUEST['email'];
                            $subject = $_REQUEST['subject'];
                            $comment = $_REQUEST['comment'];

                            //send email
                            mail($admin_email, "$subject", $comment, "From:" . $email);

                            //Email response
                            ?>
                            <div id="forminput" class="mdl-card__supporting-text" style="text-align: center;">
                                <span>Bedankt, je e-mail is verzonden, we nemen zo spoedig mogelijk contact op.</span><br><h1>&#128522;</h1>
                            </div>
                            <?php
                        }

                        //if "email" variable is not filled out, display the form
                        else {
                            ?>

                            <form method="post">
                                <div id="forminput" class="mdl-card__supporting-text" style="text-align: center;">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" name="email" type="text" id="frommail">
                                        <label class="mdl-textfield__label" for="frommail">E-mail...</label>
                                    </div>
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" name="subject" type="text" id="subject">
                                        <label class="mdl-textfield__label" for="subject">Onderwerp...</label>
                                    </div>
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <textarea class="mdl-textfield__input" name="comment" id="inputmessage"></textarea>
                                        <label class="mdl-textfield__label" for="inputmessage">Mijn bericht...</label>
                                    </div>
                                </div>
                                <div class="mdl-card__actions mdl-card--border">
                                    <input type="submit" value="verstuur" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>
                                    <input type="reset" value="reset" style="float: right;" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>
                                </div>
                            </form>

                            <?php
                        }
                        ?>

                    </div>

                </div>
            </main>
        </div>

    </body>

</html>