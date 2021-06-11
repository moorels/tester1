import { useRef } from 'react'



import Button from '../ui/button'
import styles from './events-search.module.css';

function EventsSearch(props) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
    
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;
    
        props.onSearch(selectedYear, selectedMonth);    
      }


    return (
        <form className = {styles.form} onSubmit={submitHandler}>
            <div className = {styles.controls} >
                <div className = {styles.control}>
                    <label htmlFor='year'>year</label>  
                    <select id='year' ref={yearInputRef}>
                        <option value="2021">2021</option>   
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className = {styles.control}>
                    <label htmlFor="month">Month</label>
                    <select id='month' ref={monthInputRef}>
                    <option value='1'>January</option>
                    <option value='2'>Febuary</option>
                    <option value='3'>March</option>
                    <option value='4'>April</option>
                    <option value='5'>May</option>

                    </select>
                </div>
            </div>
            <Button href={submitHandler} >Find Events</Button>
        
        </form>
    )
}
export default EventsSearch