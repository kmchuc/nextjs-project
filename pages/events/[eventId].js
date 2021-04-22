import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

function EventDetailPage(props){
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>no event found</p>
    }

    return(
        <div>
            <h1>event detail page</h1>
        </div>
    );
}

export default EventDetailPage;