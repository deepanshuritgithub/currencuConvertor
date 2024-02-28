//yha pe jsx nhi rkhiyega kyuki ye jo hooks hote hai na , ye majority of the cases mai purely javascript return krte haii  , so ek achi pactice ye hoti hai agr app ke pass jsx return ho rha hoo tab app jsx rkhoo agar app ke pass jx return nhi ho rha haiitab file ka name .js ya .ts hi rkhoo

import {useEffect, useState} from 'react'
 //ap function ka naam jo chahe diiye mai yhi dungaa acha use c in kyu de rha ho jdataar hoooks hai unka unspoken rule khe sakte hai app ki bada hi standard sa rule bna diya gya hai ki jabbhi hooks use kree uske piche use lgaa do , ab dekhiye hooks aapke upar hai kai hooks optional argument lete hai  , pr hamara hook optional argument nhi letaa usko currency ki info dene hi padti hai  to ek variable yha pe mai le rha hu currency aPP KUCH BHI DE SAKTE HAi 
function useCurrencyInfo(currency){
  //tohm kya  bolte hai yha pe simple se ek data bnaoo or yha pe ek setdata bh bna lete hai  or yha pe usestate hook use kr lete hai 
  const [data, setData] = useState({})//ab sabse achi baat kly hai hm es hook ke andar directly ek empty object dall dete hai ki incase agr fetch call wagera nhi aari hai , to ek empy object to hai hi agr uspe bhi looplgaoo ge to atleast crash to nhi kregaa 




    //now our hook is ready but this hook returns some data , but  what data it returns here       '
    //to actually mai , mai yaha pe kya krna chahta hu ki ,yha pe ek  api call krna chaahta hu  which api ? , to vese to mai directly fetch mai bhi call kr sakta hu  , lekin mai chahta hu jab ye hook load hogaa ye koi esko use kregaa tab mai es hookk ko call krwaoo ya fir uss api ko call krwaoo ,
    
    //  to abb essaaaa konsa hook haii , jo merko, invoke mai kr sakta hu , jab bhi koi component mount ya unmount hota hai  , unmount to nhi bol sakte , ye uska life cycle event trigger hota hai ,
    
    //  to haamaare pass ek hook hota haii uska naam hai useEffect , to es method se mai kya kr sakta hu ki mera automatically fetch call ho jayegaa , to es function ke andar ek or func nhi bnana padegaa ki acha mera function call hogya hai to ab mera api call kr doo , mai eske andar directly hi kaam kr dungaa 
    useEffect(()=>{
        //ab jaise hi mai eske andar aayay o kam kyaa krwana hai , kaam kuch nhi krwana ek fetch call krwana hai 
        //ab mudde ki baat ye hai ki fetch call krwana kha pe hai 
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)//to ye to hogya hamara api call 
        // ab fetch se apko pta hai app chaining kr sakte ho yani ki mai yha pe .then lga sakta hu jitne mrzi aaye 
        .then((res) => res.json())//a yha se agar datajson mai convert ho gya hai to es data  ko kai na kai hold krna padegaa   thik hai pr abhi ek .then lga dete hai 

                              //so ye jo response ayaa hai , mai iska andar yha pe square bracket se uska access lunga , or bolunga currency 
                              // res[currency]//so mera ab yha pe problemn khtm ho gya ki , mai kese pta lagoo .usd bolna hai ya .inr bolna hai ,kyuki jo bhi maine url mai diya hai request , vhi se uska value lelungaa , so upoar jo currncy mai jo request krengee uska bases pe yha key value mil jayengi 
        .then((res) => setData(res[currency])) //ab mujhe .then ko pta hai yaha pe apke pass response jo ayaa hai ye json format mai ayaa hai,   lekin vhi baat es data ko hold kaha krungaa, ab data ko aagr mai regular variable mai hold kr dungaa to problem hogi kyuki ui mai kabhi update nhi hogaa 
        //to ye jo hook hai na directly apko use state se value return kra dete  hai


        // hook create use state 
        //ab yha pe jo response aya auske andar maine kya kra waapas se mera jo set data hai usko use kr lete  hai    pr mmaien kya kha ki ye jo response aaya hai  uske andar se kya nikal lo , so mujhe itna to smjh aaa gay ki jo bhi currency ki value pass krunga to mere pass key value bhi vhi aayege or mujhe ye bhi pta hai har baar ek object ko accesss krne ke liye dot jruri nhi hai mai square brackets se bhiaccess le sakta hu, to ye jo response aaya hai mai esme square bracketsse hi eska access lungaa or bolunga currency , to ye to meara prbm tm hogya .usd bolna hai ya .inr bolna hai to jo bhi maine url mai diya hai hise mai uska value  lelungaa 



        //to agr apko abhi bhi cofuse ho rha hai to simple  sa ek console log lgao  yha pe or bolo data ke andar kya hai ye mujhe btaa do 
        console.log(data);

        // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json
        //acha ab ye bhi dekhiye ye jo useEffect ke andar ye jo fetch hai ye call kab kab krana chahogee 
        //dekhiye agr mai jaise hi url mai ,  usd se inr krta hu url mai page load time to obvious se baat hai mai chahunga call ho     , to currency ke andar jb bhi change ho, mai wapsi se call krwana chahunga, to ye mere dependency hai so ess lia esko dependency array bolte hai 
        
        //si es liye yha pe hmara pass aa gya currency  
    } , [currency])//2sra hota hai dependency array ki es chiz mai koi bhi change aayega to mai wapis se api call krungaa 


    //ab kappane kya kha yha se mai retrun kya kru 
    //so mujhe pta hai ab app soch rhe honge yhe pe return kr do ye data 
    // retrun data //ye data return krunga to ye prblem ho jayegi , ek kaam krte hai setdata return kr dete hai so agr vo bhi kenge to data ka accesss nhi rhegaa , to ek kaam kroo ek array bnna do kyuki apne kha thacustom hook hai  or uss pure ko hi retturn kr doo data ko bhi  or setdata ko bhi , thik hai app kaafi hadd tak shi hai lekin fir ye call kese hogaa to cureency ka access kese logee es lia ye approach yha pe gltt haii , glt to nhi haii pr es situation mai thik nhi baith rhi hai 


    // to hmm kya krenge hmm es pure method se sirf data return krte hai     
    console.log(data);
    return data //sirf data ko return krenge  , data ko return krenge mtlb set nhi kr paenge value , currency nhi kr payenge ,nhiiiii , eske liye appki ek functionality hai es lia hm usko custom hook bol rha hai  , kyuki mai yha pe mai ek syntax likhunga bada hi simple sa jiska naam hai export default ye o usecurency hai 

  
}

export default useCurrencyInfo;
//ab maine kiya kya hai actuaally mai ek functionality design kre or es pure ke pure method ko hi return kr dia or jo appka useState hookk hai vha pe bhi yhi hio rha hai ki pura ka pura method hi return ho jata hai , ab uss method se app kya kya value derive kr rha ho kyuki ye method bhi endoftheday return kr rha hai data to mai vha se data ka access le lungaa  

//ab yha se return mai kya krruu 



//ab hm jaate hai kese hmm components ko reusable bnate hai  






// function hello() {
//     return [] //ae ye kya kr rha hai ye return kr rha hai array or eske andar2 variable return kr dijiye ye bhi ek custom hook haii 
// }

// //lekin ye jo custom hook hai na ye bhi apke built in hooks ko use kr sakte hai  jaise useEffect , useState ha in sabko use kr sakte hai ye      to hm bhi kuch aesa hi krenge inko use krenga 




