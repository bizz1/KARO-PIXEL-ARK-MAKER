# KARO-PIXEL-ARK-MAKER
PIXEL ART MAKER IS A TASK GIVEN TO BENEFICIARIES UNDER GOING THE UDACITY , GOOGLE SCHOLARSHIP PROGRAM TO TEST THEIR KNOWLEDGE SO FAR
<!DOCTYPE html>
<html>
<head>
    <title> karo Pixel Art Maker!</title>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
   <div class="wrapper">
        <header class="header">
            <h1><span class="orange">Lab: </span> <span class="skyblue">Pixel Art Maker</span></h1>
        
            <h2 style="color: tomato; margin-bottom: 20px;">Choose Grid Size</h2>
            
            <form id="sizePicker">
                Grid Height:
                <input type="number" id="inputHeight" name="height" min="1" value="1">
                Grid Width:
                <input type="number" id="inputWeight" name="width" min="1" value="1">
                <input type="submit" >
            </form>
        </header>
        <!-- SIDEBAR -->
        <section class="sidebar">
            <h2 >Pick A Color</h2>
            <input type="color" id="colorPicker">
        </section>
        <!-- GRID CONTAINER -->
        <section class="content">
            <h2 >Design Canvas</h2>
            <table id="pixelCanvas">

            </table>  
        </section>  
        <footer>
            <p>design by karo</p>
        </footer>
    </div>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
</script>
    <script src="designs.js"></script>
</body>
</html>
