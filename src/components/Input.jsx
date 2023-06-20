
// eslint-disable-next-line react/prop-types
const Input = ({onChange}) => {
    return (


        <div>
            <textarea onChange={(e)=> onChange(e.target.value)} name="" id="" cols="30" rows="3"/>
        </div>
    );
};


export default Input;