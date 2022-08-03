
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
/********Shifting Table**************/
const ShiftingTable=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1]
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
    for(var i=0;i<16;i++){
        
    }
});
 
