
import { useDispatch, useSelector } from 'react-redux'
import { amount,getVal,reverseBtn,firstVal,secondVal } from '../../store/actions'

 const  Converter = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
   console.log(firstVal);
  return (
    <div className='h-screen bg-green-800 '>
        <h1 className=' font-serif font-extrabold text-3xl text-center pt-8'>CURRENCY CONVERTER</h1>
    <div className='flex justify-center' >
    <div className= 'w-4/5 mt-20 caret-lime-50'>
    <div className= ' flex justify-center'>
        <br />
        <div className=  'w-4/6 bg-slate-100 rounded-md h-3/5 flex justify-center items-center flex-col pt-2 min-w-3/4'>
            <h3>Amount</h3>
                <input className=' text-center text-xl w-3/5 rounded-md' type="number"  
                onChange={(e) => dispatch(amount(parseInt(e.target.value)))} />
          <br />
          <br />
            <h3>From</h3>
            <select className=' w-3/5 rounded-md' onChange={(e)=>dispatch(firstVal(parseFloat(e.target.value)))} >
        <option value="85.5"> 🇺🇸 USD &#36;</option>
        <option value="90.0"> 🇪🇺 EUR &#8364;</option>
        <option value="0.90"> 🇷🇺 RUB ₽</option>
        <option value="24"> 🇦🇪 AED د.إ</option>
        <option value="1.06"> 🇮🇳 RUPEE ₹;</option>
        <option value="3.24"> 🇹🇷 LIRA &#8378;</option>
        
           </select>
        
           <br />
           <button  className=' rounded-md w-10 h-3/2 bg-blue-800 font-bold ' onClick={()=>dispatch(reverseBtn())}>&#8645;</button>
           <br />
            <h3>To</h3>
            <select className=' w-3/5 rounded-md' onChange={(e)=>dispatch(secondVal(parseFloat(e.target.value)))} >
        <option value="89.5"> 🇺🇸 USD &#36;</option>
        <option value="90.0"> 🇪🇺 EUR &#8364;</option>
        <option value="0.90"> 🇷🇺 RUB ₽</option>
        <option value="24"> 🇦🇪 AED د.إ</option>
        <option value="1.06"> 🇮🇳 RUPEE ₹;</option>
        <option value="3.24"> 🇹🇷 LIRA &#8378;</option>
        <option value="89.40"> 🇰🇬 KGS</option>
           </select>
           <br />
           <br />
        <button className=' font-bold rounded-md w-3/5 bg-lime-400'
         onClick={() => dispatch(getVal())}>Submit</button>
        
        <br />
        <br />
        <div className= ' text-xl pb-3 w-4/5 text-center font-bold from-neutral-950'>
        {state.result}</div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )

}
export default Converter
