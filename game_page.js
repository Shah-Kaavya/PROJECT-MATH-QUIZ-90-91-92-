p1name=localStorage.getItem("player1"); 
p2name=localStorage.getItem("player2"); 
document.getElementById("player1_name").innerHTML=p1name + " : "; 
document.getElementById("player2_name").innerHTML=p2name+" : "; 
p1score=0; 
p2score=0; 
document.getElementById("player1_score").innerHTML=p1score; 
document.getElementById("player2_score").innerHTML=p2score; 
document.getElementById("player_question").innerHTML="Question turn - " + p1name;
document.getElementById("player_answer").innerHTML="Answer turn - " + p2name;
function send() 
{
   number1 = document.getElementById("num1").value;
   number2 = document.getElementById("num2").value;
   actual_answer = parseInt(number1) * parseInt(number2);
   question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
   input_box = "<br>Answer : <input type='text' id='input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row = question_number + input_box + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("num1").value = "";
   document.getElementById("num2").value = "";
}
question_turn = "player1";
    answer_turn = "player2";
    function check()
    {
        answer = document.getElementById("input_check_box").value;
        if(answer == actual_answer)
        {
            if(answer_turn == "player1")
            {
                p1score = p1score + 1;
                document.getElementById("player1_score").innerHTML = p1score;
            }
            else
            {
                p2score = p2score + 1;
                document.getElementById("player2_score").innerHTML = p2score;
            }
        }
        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + p2name;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + p1name;
        }
        if(answer_turn == "player1")
        {
            answer_turn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2name;
        }
        else
        {
            answer_turn = "player1"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + p1name;
        }
        document.getElementById("output").innerHTML = "";
    }