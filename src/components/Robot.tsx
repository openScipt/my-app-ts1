import React from "react";

interface RobotProps { // 这个接口的定义数据实际上就是需要我们从父组件传递到当前组件的数据，组件间的数据就是通过props来完成的，实际上RobotProps interface就是这个组件的props
    id: number,
    name: string,
    email: string
}

 const Robot : React.FC<RobotProps> = ({id, name, email}) => { 
    
    return <li>
        <img src={`https://robohash.org/${id}`} alt="robot" />
        <h2>{name}</h2>
        <p>{email}</p>
    </li>
}

export default Robot