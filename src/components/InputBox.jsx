//so jo bhi hm component bnate hai usko uppercase krna chiye       

import React, {useId} from 'react'

function InputBox({ //so ek input box hai jo 2 input le rha hai app se ek label or ek classname 
    //so ab user se app kya kya lena chahte hai , kya kya nhi lena chahte ,vo appke upar haii , pr mai s component ko es trah se design kr rha hu kilabel to lunga hi mai kyuki mai ye display krna chahta hu,  ki from or to pass kr rha ho , eske alawa merko amount bhi lena padega ki kis trah se amount display krna hai     kyuki end of the day sab display to yhi hogaa 
    label,  
    amount,
    onAmountChange,       //ONAMOUNTCHANGE MAI ES LIYE LUNGA KYUKIJ JO BHI ES COmpoent ko call kr rha hai, vha pe hm iski baat krengee , kyuki amount change hoga to state bhi  to change krni padegi na , to input control to yhi se ho rha hai to vha pe bhi hm ek usestate bnayenge amountchange or onamount change es tarah se taab  hmee pta lgee kya kya chizee ho rhi hai so agar app yhi pe project mai amountr change krna chahenge to api call ussi se ho jaeygi na sari calculation vhi se ho jayegi to vo bhi to chiye data , to vo hm state mai krenge 
    onCurrencyChange, //filter part 
     currencyOptions = [], //so currency options kya hai , ki mai chahta hu ki koi na koi array mai hi pass kro , incase nhi kro to koi nahi kro to mai ek default empty array to mai leloo ,, kyuki ye jo currency options hai na hm ye array se hi loop through krenge , aaayenge kha se hamare pass kyuki json data jo call hai uske baare mai bhi baat krenge lekin abhi assume kriye jo bhi usse use krenga vo degaa but mera app crash na ho  es lia maine byefault array yha pe de diya hai kyuki merko vishwas nhi hai user kese use kregaa 
    selectCurrency = "usd", // ab ye select currency kyu , ha kyuki list to hai cuurency ki lekin pta hai na select konsi krni hai vo bhi , by default jo mankre dijiye mai "usd" de rha hu taaki ek currency to atleast selected rhee hi rahe kuch bhi nahi hai to 
    amountDisable = false, // ab ho sakta hai kuch user amount nhi dena chahte hai ya dena chahte hai to vo bhi hm le lete hai veese iski jrurat nahi  hai app chahe to isko ignore bhi kr sakte hai 
    currencyDisable = false, //and uiske baad app currency ka bi disbale enable le sakte hai  , ye sab mai es lia btaa rha hu kyuki production grade app mai ye sab lagata haii      

    //so ab in sabko use rkese krna hai vo hm dekhte ha ek ek karke use kese hogaa 
    className = "", //so agr classname kuch bhi nhi to hmne default daal di empty
}) {
   
 // itni si bi dikkat nhi hai abhi es project ke andar lekin esko or optimise bnaya ja sakta haii , kese ??
 //dekhiye hmm jo label use kr rha hai na yha pe to ye label atually mai apka abhi label    har baar repat hoga haar baar change hoga ki konsa label app use kr rhaa hoo to yhaa pe mai esko thdaa sa optimisation approach mai de sakta hu ki jiske through app or values ko or acha kr doge  so react ke anar na ek or hook aapke pass avaiabele hai 


    const amountInputId = useId()//DEGA KYA KUCH NHI BS EK UNIQUE VAlue aayegi random strings ko use krte huee unique values apko mil jayegi , ab uiue value apko mil gya hai o hm kya krenge  hm bind kr denge kuch chiz ko jaise apko pta hai label ke andar hota hai  for krke hota hai lekin hm for nhi likhte haii , hm yha pe html for hota haii , kyukki reserved keyord hai for apne app mai 

    //do not call useId to generate keys in a list , keys shoud be generated from your data 
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
         
            <div className="w-1/2">
                           {/* // to hm kya krenge esko bind kr detehai jo bhi hamare pass value aaye hai so ab yha pe label to lg gya hai uniqueness ke liye so agar kai baar apko agar ese loop mai bhi problem aaya ya kuch aaye to react khud bhi bolta hai ki app attributes wagera ke liye esko use kr lijiye */}
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                    {/* wrap krne se ye variable se aa jayega data  */}

                </label>
                {/* //so label to ho gya hai pr input ke sath bhi to usko bind kroo  , kyukin input bhi to dena hi haii apko tag  wagera ke through use krkee ye sabb   */}
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    //lekin kya ye jo input field hai enable hai ya disable hai, o es se hm ggovern kr sakte hai jo hamra pass disabled property hai usko hm bolenge es se puchlo amount disabled by default ye false hai agr kisi a pass kra ho hm usko utilise kr lete hai 
                    //ab eske aadr value ke itni field hai , to koi value bhi to hogii t value app kha se loge , too value app ek kaam kro app simple lelo amount se
                    disabled ={amountDisable}//ab ye amount change hota ai to mai kya karuu , kyuki hr ek box pe onchange value to aati hai
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}//ab ees onchange ko use kese kru taaki mare component se hi abko ptaa lag jayee , component se app ek event fire kr sakte hai  or uss event se method call kr sktee hai , KONSA method call kruu ye jo hmne onchaanhe amount wala ko decalration mai liya,    ese liye liya hai, taki directly jo main hamara esko  call kregaa vhi pe agar hamara onAmount change hai , to vhi se hme method access mil jayee   lekin krne ko to mai onAmountChange ko directly yhaa pe use kr saktaa huu , leki p[roblem kya hai koi deault aapne upar pass nhi kari hai , kr bhi nhi sakte kyuki function hai ,, to vha pe possible chances haii ki ye crash kr jayee kisi na nhi ass kr rkhaa to , to kyaa kroo yha pe bada hi simple sa sytax hai && condn agr e availabe hai to hm anaomountChnage ko use krenge   , ye ek ytarah ka chequer hai ki ye exist krta ki nhi krtaa ] and eske andar ap krenge simple sa  e.target.value  or yha se ho jaeygi problem, acha esme problem kya hai , dekhiye event.target.value shi hai , apka datatype number hai vo bhi thik hai lekin javascript na thdi si nutorious hai kai baar cheezo ko events ke anadar apko , kai baar kya kr baar hi eske andar jo values hai    unko string format me le leti hai to bhut time lgta hi es bug ko resolve krna mai 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select 
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    //ab baat aati hai  currency type "usd" ki kyuki abhi jo haamre pass input field hai , uske andar kya hai apke pass actually maii jaada values nhi haii 
                    //lein abhi ek chizz to confirm ho gyee ki es options ke andar loop krne wala hai hamm pr phle select field ko bhi thda sa hmm values wagera dede  , ton select field ki value kya hai current value, dropdoe mai value aayegi vo to thik hai lekin vale uthate to yhi se hai    
                    value={selectCurrency}
                    //yha pe jab change hogaa to yhaa pe  value change honi chahiye , hanji , es liyee hmne bola hai onCurrencyChange

                                    //so ho skta hai uske andar kuch value na ho , so lijiye && operator se check kr liyee or le liye onCurrencycahnge ko 
                                    
                    onChange={(e)=>{onCurrencyChange &&  onCurrencyChange(e.target.value)}}
                    //ab ye field enable hai ya disable haii, ye currency wala field enable hai ya disabled hai   
                    disabled={currencyDisable}
                >
                   {/* 
                    //ab apko pta hai is field ko mai loop krne waala hu e, so esko mai loop kese lgaunga lijiye start kriye javascript eske baad boliye ake jo currency options hai ab eske ssath kya kr do map lgaa do ese hi to loop lgaata haii , ab apko pta hai map ke andar appko hr ek value milegi es callback ke andar , ab mujhe pta hai ye lgaunga to {} curlybraces se return krna padega    ,, ab agar apko yha pe value nhi dene hai to app es trahh se de jiyee ()  yehmne js mai pada hi thaa 
                                       //hr ek individual currency ka access milega to ese app yhaa pe c bol dijiye ya currency , so thik hai currency ka access mil gyaa mujhe */}
                    {currencyOptions.map((currency)=>(
                        //ab eske anadr jaana hai mujhe or ek component return krna hai  , ab haar yhi value same repeat hogii 
                        <option key={currency} value={currency}>
                            {/* //value usd nhi chlegii value hm javascript se hm lenge  or bolengee currency 
                            {currency}     //ab har baar usd thdi na display krayengee shi baat hai so yha pe bhi value change , har baar user ko usd thdi na display kraynge so yhaa pe bhi value changee , user ko dikhan bhi to chiye , user ko har baar usd thdi na dikhegaa  */}
                            {currency}
                        </option>
                        //lekin problem kya hai jab aap ki es traahh se value repeat hoti haii tab performance ka andar react bhut jyada hit krta hai , kyuki react ko pta hi nhi hai na jo vo dom bnaye jara hai , bnaye jara hai to vo ek hi element to 1000 aar nhi bnaa rhaa so ussi cheez ko rokne ke liye appke pass field aata hai yha pe i.e key, jab bhi app loop lgayenge jsx ke andar kyuki jsx se hi to apke dom eements bnn rha hai , to apko key passs krni hi padegii , ab key ke upar na apne app ek discussion ho sakkta hai key kya honi chiyee , jaise array mai loop kr rha ho to kya key index ho sakti haii ... ho to sakti hai lekinn uske bhi kuch performance drawbacks ho sakte hai kai baar, ispe hm discuss krenge interview section mai  , bs only remember   ki agr apko performance lani hai loop ke andar elements ko repeat krne ke liye to apko key pass krni hi chiyee  , react rokega nhi chooti se warning degaa lekin performance bhut degrade ho jati haii  , 
                        // to key kya hai hmm currency de dete hai, kyuki mujhe pta hai eske andar  currency values hi haii, app chahe to idex bhi de sakte thee , mai map ke anda index bhi le sakta tha  , inde\x bhi pass kr sakta thhaa , beete optio yhi hota hai jo unique field aara hai ya vo lelo  , id bhi le sakte ho agr database se kr rhe hoo , id jyada prefer krungaa mai index lene ki bjaaye    
                    ))} 
                     {/*abb ese hi to loop lgaatee hai .map krke   */}
                        {/* Remember they key in loops in react for a perfroamance , when yuu are repeating a component  */}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

//acha abb kyaa hai ki apne es field ko directly export  kiya ha to ap esko use kr sakte haii export default , lekin es export mai koi dikkat nhi haii, koi kharabi  nhi haii  lekin ek baeet trika bhi haii bade project mai jada recommend mai krta hu , chhote project mai nhi , yha pe o mai bhi khud diect export hi krta hu , lekin cmponents mai app nerw file bnaiyee or uss file ka naam de dejiye aap index.js 







//so agar apko ye ek aar aa gya na , to ab aap koi bhi component bnayenge to app reusability ke baare mai bbhut sochenge appka thougt process kaaafi rhegaa vhaa pe 