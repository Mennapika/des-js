
const form  = document.getElementById('data');
/********Permutation Choice 1**************/
const pc1=
[
    57,	49,	41,	33,	25,	17,	9,
    1,  58,	50,	42,	34,	26,	18,	
    10,	2,  59 ,51,	43,	35,	27,	
    19,	11,  3, 60, 52,	44,	36,	
    63,	55,	47,	39, 31,	23,	15, 
    7,	62,	54,	46,	38,	30,	22,	
    14,	6,	61,	53,	45,	37,	29,	
    21,	13,	5,	28,	20,	12,	4,	
];
/********Shifting Table**************/
const ShiftingTable=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1]
/********Permutation Choice 2**************/
const pc2=
[
    14,	17,	11,	24,	1,	5,
    3,	28,	15,	6,	21,	10,
    23,	19,	12,	4,	26,	8,
    16,	7,	27,	20,	13,	2,
    41,	52,	31,	37,	47,	55,
    30,	40,	51,	45,	33,	48,
    44,	49,	39,	56,	34,	53,
    46,	42,	50,	36,	29,	32,
]
/********IP**************/
const IP=
[
    58,	50,	42,	34,	26,	18,	10,	2,
    60,	52,	44,	36,	28,	20,	12,	4,
    62,	54,	46,	38,	30,	22,	14,	6,
    64,	56,	48,	40,	32,	24,	16,	8,
    57,	49,	41,	33,	25,	17,	9,	1,
    59,	51,	43,	35,	27,	19,	11,	3,
    61,	53,	45,	37,	29,	21,	13,	5,
    63,	55,	47,	39,	31,	23,	15,	7
]
/********IP-1**************/
const IP_1=
[
    40,	8,	48,	16,	56,	24,	64,	32,
    39,	7,	47,	15,	55,	23,	63,	31,
    38,	6,	46,	14,	54,	22,	62,	30,
    37,	5,	45,	13,	53,	21,	61,	29,
    36,	4,	44,	12,	52,	20,	60,	28,
    35,	3,	43,	11,	51,	19,	59,	27,
    34,	2,	42, 10,	50,	18,	58,	26,
    33,	1,	41,	9,	49,	17,	57,	25,
]
/**********************The permutation P***************** */
const p=
[16,   7,  20,  21,
 29,  12,  28,  17,
 1 , 15,  23,  26,
 5,  18,  31,  10,
 2,   8,  24,  14,
 32,  27,   3,  9,
 19,  13,  30,  6,
 22,  11,   4, 25,]
/*****************Expansion function (E)*************** */
const E=
[
    32,	1,	2,	3,	4,	5,
    4,	5,	6,	7,	8,	9,
    8,	9,	10,	11,	12,	13,
    12,	13,	14,	15,	16,	17,
    16,	17,	18,	19,	20,	21,
    20,	21,	22,	23,	24,	25,
    24,	25,	26,	27,	28,	29,
    28,	29,	30,	31,	32,	1,
]
/*****************S-BOXES*************** */
  const SBox1=[
    [14,  4 , 13,  1,   2, 15,  11,  8,   3,  10,   6,  12,   5,  9,   0,  7,],
    [ 0,  15,  7,  4,   14, 2,  13,  1,   10,  6,   12, 11,   9,  5,   3,  8,],
    [ 4,  1,  14,  8,   13, 6,   2,  11,  15,  12,   9,  7,   3,  10,  5,  0,],
    [ 15, 12,  8,  2,   4,  9,   1,  7,   5,   11,   3, 14,   10,  0,   6, 13,],
  ]
  const SBox2=[
    [ 15,  1,   8, 14,   6, 11,   3,  4,   9,  7,   2, 13,  12,  0,   5, 10,],
    [ 3, 13,   4,  7,  15,  2,   8, 14,  12,  0,   1, 10,   6,  9,  11,   5,],
    [ 0, 14,   7,  11, 10,  4,   13, 1,   5,  8,  12,  6,   9,  3,  2,   15,],
    [ 1, 3,  8,  10,  1,   3, 15,   4,  2,  11,  6,   7, 12,   0,  5, 14, 9,]
  ]
  const SBox3=
  [
    [10  ,0,   9, 14,   6,  3,  15,  5,   1, 13,  12,  7,  11 , 4,   2,  8],
    [13,  7,   0,  9,   3,  4,   6, 10,   2,  8,   5, 14,  12, 11,  15,  1],
    [13,  6,   4,  9,   8, 15,   3,  0,  11,  1,   2, 12,   5, 10,  14,  7],
    [1, 10,  13,  0,   6, 9,   8,  7,   4, 15,  14,  3,  11,  5,   2, 12,],
  ]
  const SBox4=
  [
    [7, 13,  14,  3,   0,  6,   9, 10,   1,  2,   8,  5,  11, 12, 4 ,15],
    [13,  8,  11,  5,   6, 15,   0, 3,   4,  7,   2, 12,   1, 10,  14,  9],
    [10,  6,   9,  0,  12, 11,   7, 13,15,  1,   3, 14,   5,  2,   8,  4,],
    [ 3, 15,   0,  6,  10,  1,  13 , 8 ,  9,  4,   5, 11,  12,  7,   2, 14,]
  ]
  const SBox5=
  [
    [2, 12,   4,  1,   7, 10,  11,  6,   8,  5,   3, 15,  13,  0 , 14,  9,],
    [14, 11,   2, 12,   4,  7,  13,  1,   5,  0,  15, 10,   3,  9,   8,  6,],
    [ 4  ,2,   1, 11,  10, 13,   7,  8,  15,  9,  12,  5,   6,  3,   0, 14,],
    [11,  8,  12,  7,   1, 14,   2, 13,   6, 15,   0,  9,  10,  4,   5,  3,]
  ]
  const SBox6=
  [
    
    [12,  1,  10, 15,   9,  2,   6,  8,   0, 13,   3,  4,  14,  7,   5, 11],
    [10, 15,   4,  2,   7, 12,   9,  5,   6,  1,  13, 14 ,  0, 11,   3,  8],
    [ 9, 14,  15,  5,   2,  8 , 12,  3,   7 , 0,   4, 10,   1, 13,  11,  6],
     [4,  3,   2, 12,   9,  5,  15, 10,  11, 14,   1,  7,   6,  0,   8, 13],
  ]
  const SBox7=
  [
    
    [4, 11,   2, 14,  15,  0,   8, 13,   3, 12,,   9,  7,   5, 10,   6,  1,],
    [13,  0 , 11,  7,   4,  9,   1, 10,  14,  3,   5, 12,   2, 15,   8,  6,],
    [1,  4,  11, 13,  12,  3,   7, 14,  10, 15,   6,  8,   0,  5,   9,  2,],
    [6, 11,  13,  8,   1,  4,  10,  7,   9,  5,   0, 15,  14,  2,   3, 12,],

  ]
  const SBox8=
  [
    
    [13,  2,   8,  4,   6, 15,  11,  1,  10,  9,   3, 14,   5,  0,  12,  7,],
    [1, 15,  13,  8,  10,  3,   7,  4,  12,  5,   6, 11,   0, 14,   9,  2,],
    [7, 11,   4,  1,   9 ,12,  14,  2,   0,  6,  10, 13,  15,  3,   5,  8,],
    [  2,  1 , 14,  7,   4, 10,   8, 13,  15, 12,   9,  0,   3,  5,   6, 11,],
  ]
  
/********Function to Convert From Hex to Binary************* */
function hex2bin(hex){
    hex = hex.replace("0x", "").toLowerCase();
    var out = "";
    for(var c of hex) {
        switch(c) {
            case '0': out += "0000"; break;
            case '1': out += "0001"; break;
            case '2': out += "0010"; break;
            case '3': out += "0011"; break;
            case '4': out += "0100"; break;
            case '5': out += "0101"; break;
            case '6': out += "0110"; break;
            case '7': out += "0111"; break;
            case '8': out += "1000"; break;
            case '9': out += "1001"; break;
            case 'a': out += "1010"; break;
            case 'b': out += "1011"; break;
            case 'c': out += "1100"; break;
            case 'd': out += "1101"; break;
            case 'e': out += "1110"; break;
            case 'f': out += "1111"; break;
            default: return "";
        }
    }

    return out;
}
/********Function to Shift Key************* */
function shifiting(arr,n){
    for(var i = 0; i < n; i++)
    {  
        var temp=[];
        for(var i=n ; i<arr.length;i++)
        {
          temp.push(arr[i]);
        }
        //Stores the first element of the array  
        var first = arr[0];  
        var second=arr[1];
        if(n==1){
            temp.push(first);
        }
        else if(n==2){
            temp.push(first);
            temp.push(second);
        }
    } 
    return temp;
}
 /********Function to encrypt message through iteration(F(Rn-1^Kn)) Key************* */
 function firstf(R,K)
 {
  RE='';
  for(let i = 0; i < E.length; i++)
   {
    var index= E[i]
     RE+=R[index-1];
   }
   console.log("Expansion Of R :")
   console.log(RE);
   var result=RE^K;
   console.log("F(Rn-1^Kn):")
   console.log(result);
   return result;
 }
 function SBoxFuncion(firstfunction)
 { var SBoxResult='';
      var row1="";
      row1+=firstfunction[0];
      row1+=firstfunction[5];
  var row1D=parseInt(row1, 2);
  var col1=""
  col1+=firstfunction[1];
  col1+=firstfunction[2];
  col1+=firstfunction[3];
  col1+=firstfunction[4];
  var col1D=parseInt(col1, 2);
  var D1=SBox1[row1D][col1D];
  var B1=parseInt(D1, 10);
  SBoxResult.concat(B1);
  var row2=firstfunction[6].concat(firstfunction[11]);
  var row2D=parseInt(row2, 2);
  var col2=firstfunction[7].concat(firstfunction[8]).concat(firstfunction[9]).concat(firstfunction[10]);
  var col2D=parseInt(col2, 2);
  var D2=SBox2[row2D][col2D];
  var B2=parseInt(D2, 10);
  SBoxResult.concat(B2);
  var row3=firstfunction[12].concat(firstfunction[17]);
  var row3D=parseInt(row3, 2);
  var col3=firstfunction[13].concat(firstfunction[14]).concat(firstfunction[15]).concat(firstfunction[16]);
  var col3D=parseInt(col3, 2);
  var D3=SBox3[row3D][col3D];
  var B3=parseInt(D3, 10);
  SBoxResult.concat(B3);
  var row4=firstfunction[18].concat(firstfunction[23]);
  var row4D=parseInt(row4, 2);
  var col4=firstfunction[19].concat(firstfunction[20]).concat(firstfunction[21]).concat(firstfunction[22]);
  var col4D=parseInt(col4, 2);
  var D4=SBox4[row4D][col4D];
  var B4=parseInt(D4, 10);
  SBoxResult.concat(B4);
  var row5=firstfunction[24].concat(firstfunction[29]);
  var row5D=parseInt(row5, 2);
  var col5=firstfunction[25].concat(firstfunction[26]).concat(firstfunction[27]).concat(firstfunction[28]);
  var col5D=parseInt(col5, 2);
  var D5=SBox5[row5D][col5D];
  var B5=parseInt(D5, 10);
  SBoxResult.concat(B5);
  var row6=firstfunction[30].concat(firstfunction[35]);
  var row6D=parseInt(row6, 2);
  var col6=firstfunction[31].concat(firstfunction[32]).concat(firstfunction[33]).concat(firstfunction[34]);
  var col6D=parseInt(col6, 2);
  var D6=SBox6[row6D][col6D];
  var B6=parseInt(D6, 10);
  SBoxResult.concat(B6);
  var row7=firstfunction[36].concat(firstfunction[41]);
  var row7D=parseInt(row7, 2);
  var col7=firstfunction[37].concat(firstfunction[38]).concat(firstfunction[39]).concat(firstfunction[40]);
  var col7D=parseInt(col7, 2);
  var D7=SBox7[row7D][col7D];
  var B7=parseInt(D7, 10);
  SBoxResult.concat(B7);
  var row8=firstfunction[42].concat(firstfunction[47]);
  var row8D=parseInt(row8, 2);
  var col8=firstfunction[43].concat(firstfunction[44]).concat(firstfunction[45]).concat(firstfunction[46]);
  var col8D=parseInt(col8, 2);
  var D8=SBox8[row8D][col8D];
  var B8=parseInt(D8, 10);
  SBoxResult.concat(B8);
  var fP="";
  for(let i = 0; i < p.length; i++) {
    var index= p[i]
     fP+=SBoxResult[index-1];
}
console.log("fp:")
console.log(fP);
return fP;
 }
 
 function IterateEncrypt(L,R,K)
 {
    var firstfunction=firstf(R,K);
    var s =SBoxFuncion(firstfunction);
    var result=L^s;
    console.log("L Result:")
    console.log(result);
    return result;
 }
form.addEventListener('submit', (event) => {
     event.preventDefault();
     var key = document.getElementById("key").value;
     var message= document.getElementById("message").value;
       console.log("STEP 1 The Key from HEX to Binary:")
      var KB = ""
    /********STEP 1  Convert The Key from HEX to Binary***************/
      key.split(" ").forEach(str => {
      KB += hex2bin(str)})
      console.log(KB)
    /********STEP 2  Convert The Key from 64 to 56  Using PC-1**************/
    var KPC1="";
    for(let i = 0; i < pc1.length; i++) {
          var index= pc1[i]
           KPC1+=KB[index-1];
    }
    console.log("STEP 2  Convert The Key from 64 to 56  Using PC-1");
    console.log(KPC1);
    /********STEP 3  Split Key into L(Left) to R(Right) **************/
    console.log("STEP 3  Split Key into L(Left) to R(Right)");
    var L="";
    var R="";
    for(var i=0;i<KPC1.length/2;i++){
       L+=KPC1[i];
    }
    console.log("L :"+L);
    for(var i=KPC1.length/2;i<KPC1.length;i++){
        R+=KPC1[i];
     }
     console.log("R :"+R);
     /********STEP 4  Shifting L & R According to Shifting Table **************/
     const LS = [];   // array for Left Shifited 16 key 
     const RS=[];    // array for Right Shifited 16 key
     for(var i=0 ; i<16;i++)
     {  if(LS.length==0)
        {
         LS.push(shifiting(L,ShiftingTable[i]));
        }
        if(RS.length==0)
        {
         RS.push(shifiting(R,ShiftingTable[i]));
        }
        else
        {
            LS.push(shifiting(LS[i-1],ShiftingTable[i]));
            RS.push(shifiting(RS[i-1],ShiftingTable[i]));

        } 
     }
     console.log("Left Shifted Keys:")
     for(var i=0 ; i<16;i++)
     {
       console.log("Left Shifted "+i+":");
       console.log(LS[i].toString());
     }
     console.log("Right Shifted Keys:")
     for(var i=0 ; i<16;i++)
     {
       console.log("Right Shifted "+i+":");
       console.log(RS[i].toString());
     }
     /********STEP 5  Conc. LS & RS  **************/
     var KSC=[];
     for(var i=0 ; i<16;i++)
     {
      KSC[i]=LS[i].concat(RS[i]);
      console.log("Concat Key"+i+":");
      console.log(KSC[i].toString());
     }
    /********STEP 6  Convert The Key from 56 to 48  Using PC-2  **************/
    var KPC2=[]
    for(var i=0;i<16;i++)
    {
     var CurrentKey=KSC[i];
     var temp=''
     for(let i = 0; i < pc2.length; i++) 
     {
        var index= pc2[i]
        temp+=CurrentKey[index-1];
    }
       KPC2.push(temp);
    }
    console.log("STEP 6  Convert The Key from 56 to 48  Using PC-:")
    for(var i=0 ; i<16;i++)
     { console.log("2nd Permutted Key"+i+":");
      console.log(KPC2[i].toString());
     }
     /********Message Section **************/
     console.log("********Message Section **************")
     /********STEP 1  Convert The Message from HEX to Binary   **************/
     var MB = "";
    console.log("STEP 1  Convert The Message from HEX to Binary ")
      message.split(" ").forEach(str => {
      MB += hex2bin(str)})
      console.log(MB)
      /********STEP 2  Convert The Message from 64 to 56  Using IP**************/
      var MIP="";
      for(let i = 0; i < IP.length; i++) {
            var index= IP[i]
             MIP+=MB[index-1];
      }
      console.log("STEP 2  Convert The Message from 64 to 56  Using IP");
      console.log(MIP);
      /********STEP 3  Split Message(MIP) into MIPL(Left) to MIPR(Right) **************/
    console.log("STEP 3  Split Key into MIPL(Left) to MIPR(Right)");
    var MIPL=[];
    var MIPR=[];
    var Lo='';
    var Ro='';
    for(var i=0;i<MIP.length/2;i++){
        
        Lo+=MIP[i];
    }
    MIPL.push(Lo);
    console.log("MIPL :"+Lo);
    for(var i=MIP.length/2;i<MIP.length;i++){
        Ro+=MIP[i];
     }
     MIPR.push(Ro);
     console.log("MIPR :"+Ro);
       /********STEP 4  Procced trough 16 iteration f) **************/ 
       for(var i=1;i<16;i++)
       {
        MIPL[i]=MIPR[i-1];
        MIPR[i]=IterateEncrypt(MIPL[i-1],MIPR[i-1],KPC2[i])
       }
       /********STEP 5  Concat in reverse R[15]L[15]) **************/ 
       var ReversedMessage=MIPR[15].concat(MIPL[15]);
       console.log("STEP 5  Concat in reverse R[15]L[15]");
       console.log(ReversedMessage);
       /********STEP 6  Apply Final Permutation**************/ 
       console.log("STEP 6  Apply Final Permutation");
       var FinalPermutation=''
       for(let i = 0; i < IP_1.length; i++) {
        var index= IP_1[i]
         FinalPermutation+=ReversedMessage[index-1];
  }
  console.log("STEP 6  Apply Final Permutation:");
  console.log(FinalPermutation);

});
 
