import React from "react";
type compProps = {
    name: string
}
class NewComp extends React.Component {
    constructor(props: compProps) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <div>Hello world</div>
        )
    }
}

export default NewComp