import { useState } from "react";
import { InputBox } from "./components";//yhi to khaash baat hai yha , apko yha pe index.js likhne ki bhi jhrurat nhi hai , kyukji index file bydefault call hoti to apko index.js bhi likhne ki jrurat nhi hai 
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  //ab next kya krna haii next,next hame set krna hai states kyuki vo jo input bnaa hai na usme hmnee bhut states pass kree hai

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  //and obvious se baat hai hmme usse convert krke bhi to dikhana padegaa ki actually mai value aaye kya hai , to convert ke liye bh ek text to lagega hi
  const [convertedAmount, setConvertedAmount] = useState(0);  //for convert text

  //so ab hhm hook pe aata hai ki hook hmme kese use krna hai
  const currencyInfo = useCurrencyInfo(from); //ab esme value kya dene hai, apko chiye currency ,i where we see , we see in a function , currency , so cuurency yha se konsi pass kr sakta hu json data hai vo wala vha se pass krni hai obviosuus se baat hai to tooo pass nhi krunga , from hi krungaa , yhi se to convesion chahiye , ab ye crash bhi  nhi hogaa kyuki bydefultt usd to hai h uske andar
  
  //ab sabse intersting chiz , ye jo currency info hai na ,yha se agr apko yaad ho to hmnne data bhi liya tha return mai , data hmare pass aaa kis format mai rhaa hai , vo aara hai hmare pass ek object , ab es object ke andar hai kyaa ye keys or values hai , obviosus se baat hai options jo app user ko doge ,  app values to dogee nhi , keys hi dogee, so esaa kuch hai app object mai se saari keys nikal paoo 
  //ab agr mai yha pe object.keys kr do yha pe to merko saari keys mil jati haii or khaa se vo value apko leni padegi  , hmme chiye use currency info hook hai vha se , or usko hmne ek variable mai store kr rkha hai , kyuki yhi too hook jo data return kr rha hai
  const options = Object.keys(currencyInfo);
  //ab un keys ko mai ek variable mai hold kr leta hu 

  ///ab eske alawa choti sse functionality pe bhi baat kr lete hai agr apko yaad ho hamra pass ek functionality hai yha pr jo ki swap kr rhi haii , so swap ke anar ho kya rha hai bs yhi ki usd to ine or inr to usd bs itna hi ho rhaa hai , agr mai dekhuu to ye jo to or from maii yhi to change ho rha haii , ye to bada hi basic a example hai jha pe apko sikhaya jata  hai , ki how to swap two variables
  const swap = () => {
    //swap kya hai method haii
    setFrom(to); //ab eske andar kya kroo setfrom ke aandar to set kr do jo to ki value hai
    setTo(from); //or set to ke andar set kr do jo from ki value hai
    //  ab ye jo hai setconverted amount esko bhi change kr dete hai, esko bhi kr detehai change hamre amount se , jo bhi user nai amount diya thaa
    setConvertedAmount(amount);
    //or hmm ek setamount bhi change kr dete hai
    setAmount(convertedAmount);
    //ye 2 line krne se kyaa hogaa ki hamri jo amount hai from or to ki vo change nhi hogii bs hmaraa currency change ho jaeygaa usd to inr or inr to usd
    //agr ap ye nhi doge to kuch frakk nhi aaegaa
    // to apko jitna level of functionality dena ai dijye ,nhi dena mt dejiyee
  };

  //ab actually mai jab user convert pe click kr rha hai to ho kyaa ye bhi to ek intersting cheez haii , to jab user  convert pe click kr rha hai to usko nahi hai mtlb ki kyaa api call ho rhii mujhe bs result chahiyee to result ke liye to sara kaam kr hi diya hai na currency info    , ye sab kuch de hi rha haii data wageraa sab kuch derha hai
  //to hmm kya krte haii  ab es puri list mai se (fetch wali), mujhe nikalna hai ki user ne jo bhi bolla hai uss se  bs multiplication krna hai  bs itna hi to kaam hai

  const convert = () => {
    //eske liye ek function or method ba dete hai taaki button pe cal ho yee

    //so setConverted amount vo state jo display hogi convert hone ke baad , ye vo state hai jo hmme final result display kregi,ab eske andar kya krna hai jo  bhi amount hai usko multiply kr doo 
    //inti sari keys hai hmare pass ab mujhe pta hai ye saari =values currency info ke andar rkhi hai , or jisme bhi convert krna hai vo to se le lungaa  
    
// In JavaScript, square brackets [] are used for bracket notation, which is a way to access the properties of an object using a variable or a key that is not a valid identifier. This notation allows you to dynamically access object properties.
//eske mtlb hai ki mai to se  value access krna chahta hu , to mai sqquare brackets ka use krke khe dunga ki to se lelo , merko same hi div yani from se leni hoti to mai from likhtaa 
//simple sa mtlb hai isme bhi convert krna hai to se le lungaa 
    setConvertedAmount(amount * currencyInfo[to]); // ye vostate hai jo final result display kregii //itni sari keys hai apke pass or mujhe pta hai ye sari values currency info ke pass rkhii  hai or jisme bhi convert krna hai vo ("to") se leungaa  //ab esko ekmethod pe call kra dete hai taki button pe call hoo yee
  };      //2* supoose inr hai 1usd =82 

  //so ye hogyi funcionality humari puri ek dmm
  //ab es functionality se ka krna hai ab hmee jana hai notes maii   kyuki final jo resulthai vo vhi se dekhgee

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/12910529/pexels-photo-12910529.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* //ab yha dekhiye ki hamra pass form hai pura ka pura , ye form subit hoga tb kya hoo  */}
          {/* hmne yha pe ek event fire kr rkhaa hai jo prevent default kr rha hai , kyuki form jab bhi submit hota hai to khi jataa hai , jaata hai kisi addresss pe , ye kisi url pe hmm nahi chahte vo hoo es liye prevent default kr dia , hmm chahte hai tab ek method call ho vo method ka naam convert hai or functionality uparr lagaaa hi lii   */}
              <form
                onSubmit={(e) => {
                  e.preventDefault(); //kyuk jab form subit hota hai , jata hai vo kisi url pe ya kisi address pe, hm nhi chhatye vo ho es liye prevent Default kr diyaa  , hm chahte hai tab ek method call ho , uss method ka naam convert hai or functionality upar laga hi le 
                 convert()}}>

                <div className="w-full mb-1">
                  <InputBox
                  //ye apka input box haii ,ab es input box mai kya kya value apko dene hai ... label maine yha pe de diya hai from 
                  label="From" 
                  //obvious se baaat hai usko ek amount bhi chiye hogaa 
                  amount={amount}//amount uski property hai jo hmm state mai se de dengee 
                  currencyOptions={options}//ye jo uparr likhe the vha se aayenge   
                  onCurrencyChange={(currency) => setFrom(currency)}//to jada kuch nhi hai bs yha simply hamm pass kr dete hai currency  ,callback hi hai ye actually mai ye  //or tha kya amount set ho ,jo ki naya amount aaya ho , so kuch hi nhi hai currency change ke liye hmne sidha ka sidha callback yha pe pass kr dia taki vhaa pe(mtlb currency ke jo options change hoge to ese pta nhi chlegaa es liyee hm chahte vo amount mai reflect ho jayee to uss se hmme pta chl jayegaa ki currency change hui hai ) kuch change ho to yha pe reflect ho jayee         
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                 
                  />
                </div>
                
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}//swap ka refernece dedo , kyuki call karane ki jrurat nhi haii refernce se hi kaam ho jayeegaa   
                  >
                    {/* //so ye swapkabutton bhi chalana padegaa ab ye kese chlegaa  bs ek or propery add kr do yha pe aake onclick  */}
                    
                    swap
                  </button>
                </div>




                <div className="w-full mt-1 mb-4">
                  <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                                    //yha pe hm lete hai currency , jo bhi current currency ki value hai 
                  onCurrencyChange={(currency) => setTo(currency)}//esko hm yhaa pe setTo ke andar yha set krenge , taki vo changes na ho 
                  selectCurrency={to}
                  amountDisable //agr apko yhaa pe amount disable wagera pass krna hai vo bhi kr sakte ho app   ,mai nhi chahta user lower ke case mai, lower value mai amount change kr payee //agr app = true krke hi paasss kroge or jaisse kr rkha hai vese bhi kroge tobhi same hi kaaam hogaa so jo hammne field bnaya tha amoun disbale to vo pass kr dia so kuch bhi pass krne ka mtlb hai true pass kr rha hoo    
                  
                  />
                </div>





                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >
                  {/* //agaar app chaho to or interesting bna sakte hoo is convert ko , abhi bassic convert hai bs thda sa js likh do yha pe , ki kis-se kisme  convert krna hai   
                  
                  
                  so jaise hmm bol dete hai 
                  usd to inr, to ye hai kya (to or from) hi toh hai , so usd ki jgaahh app true or from use kr loo  
                  */} 
                  {/*       so ye rha hamara from , or esko hmm uppercase mai convert kr lete haii ya lower case mai ya apka jo mannn   kree                       //or ye j to hai ye string hai , to isko bhaar likhna padegaa     the wapis se apni js open kr loo or kya likh do to.uppercase()  or ye call kra diyaa     */}
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </form>
        </div>
      </div>
    </div>
  );
}

export default App;
