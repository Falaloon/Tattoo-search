import "./AppSearch.css"

function AppSearch (props){
    const {value, onValueChange} = props;
    //value รับค่าที่พิมพ์ , onValueChange ฟังก์ชั่นที่ใช้ในการเป็นค่า value
return(
    <div className='app-search'>
        <input 
            className='app-search-input' 
            type="text" 
            placeholder='tattoo search'
            value={value}
            onChange={(event)=>{onValueChange(event.target.value)}}
        />
      </div>
)
}

export default AppSearch;