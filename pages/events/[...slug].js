import {useRouter} from 'next/router'
import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/results-title/results-title';
import EventList from '../../components/events/event-list';
import { Fragment } from 'react';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
function FilteredEventsPage (){

    const router = useRouter();

    const filterData = router.query.slug;

    if(!filterData) {
        return <p className = 'center'>Loading...</p>
    }

    const filteredYear = filterData[0] ;
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(
        isNaN(numYear) || 
        isNaN(numMonth) || 
        numYear > 2030 || 
        numYear < 2021 || 
        numMonth < 1 || 
        numMonth > 5) {
            return (
            <Fragment>
            <ErrorAlert>
            <p>Invalid Filter. Please Adjust Your Values!</p>
            </ErrorAlert>
            <div className ='center'>
                <Button link='/events'>Show All Events</Button>
</div>
</Fragment>
            )
        }
        const filteredEvents = getFilteredEvents({
           year: numYear,
           month: numMonth,
        });

        if(!filteredEvents || filteredEvents.length === 0) {
            return <Fragment><ErrorAlert>
            <p>NoEvents Found for the chosen Filter</p></ErrorAlert>
            <div className ='center'>
                <Button link='/events'>Show All Events</Button>
</div>
</Fragment>
        }



   const date = new Date(numYear, numMonth -1)

    return(
        <Fragment>
        <ResultsTitle date = {date}/>
            <EventList items={filteredEvents}/>
        </Fragment>

    )
}
export default FilteredEventsPage