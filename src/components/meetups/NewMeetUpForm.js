import {useRef} from 'react';
import styles from '../../styles/meetups/NewMeetUpForm.module.css';
import Card from '../ui/Card';

function NewMeetUpForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descrInputRef = useRef();

    function submit(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescr = descrInputRef.current.value;

        const meetUpData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescr,
        };

        props.addMeetUp(meetUpData);
    }

    return <Card>
        <form className={styles.form} onSubmit={submit} >
            <div className={styles.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="descr">Description</label>
                <textarea required id="descr" rows="5" ref={descrInputRef}/>
            </div>
            <div className={styles.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetUpForm;