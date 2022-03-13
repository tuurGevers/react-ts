type GreetProps={
    name:string
}

export const Greet = (props:GreetProps) =>{
    return(
        <div>
            <h2>welcome {props.name}, you have 5 messagess</h2>

        </div>
    )
}