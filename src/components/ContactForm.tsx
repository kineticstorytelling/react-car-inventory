
import Button from "./Button";
import Input from "./Input";

import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseMake, chooseModel, chooseColor, chooseYear} from '../redux/slices/RootSlice';

// interfaces

interface ContactFormProps {
    id?: string[]
  }

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  
  const onSubmit = (data:any, event:any) => {
    console.log(`ID: ${props.id}`); 
    // not actually necessary just for visualization^
    // console.log(props.id)
    // console.log(data)
    if(props.id && props.id.length > 0){
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data } ${ props.id }`)
        setTimeout(() => {window.location.reload()}, 500);
        // this reloads the page to the update table once you do an update input
        event.target.reset()
    } else {
        // use dispatch to update our state in our store
        dispatch(chooseMake(data.make));
        // the data is coming from below in the return
        dispatch(chooseModel(data.model));
        dispatch(chooseColor(data.color));
        dispatch(chooseYear(data.year));

        server_calls.create(store.getState())
        // this will ping the store variable and get the info and create a new user with the info using the create function
        setTimeout(() => {
           window.location.reload() 
        }, 500);
    }
    // I'm also more so like this b/c it's looking like I'm going to have to go back to working as a surgical tech for a while cause the road to a software developer job is looking a lot longer than I originally thought and I'm super bitter
  }
  
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name='make' placeholder="Make"/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name='model' placeholder="Model"/>
                    {/* register I want useform hook to have access to my input and all the data inside. Want to pass this info as props into props in input tsx which will ultimately send it to the onsubmit function which is part of handlesubmit */}
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name='color' placeholder="Color"/>
                </div>
                <div>
                    <label htmlFor='year'>Year</label>
                    <Input {...register('year')} name='year' placeholder="Year"/>
                </div> 
                <Button
                    className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                >
                    Submit
                </Button>
          </form>
        </div>
  )
}

export default ContactForm