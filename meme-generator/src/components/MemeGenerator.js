import React from 'react'

export default class MemeGenerator extends React.Component{

    constructor(){
        super()
        this.state ={
            topText:'',
            bottomText:'',
            randomImage :'http://i.imgflip.com/1bij.jpg',
            allImages:[]
        }  

        this.handleFormFieldChange = this.handleFormFieldChange.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response =>response.json())
        .then(response =>{            
            const {memes} = response.data
            this.setState({allImages:memes})
        })
        
    }


    handleFormFieldChange(e){
        const {name, value} = e.target
        this.setState({
            [name]:value
        })

    }

    displayARandomImage(e){
        e.preventDefault()
        const images = this.state.allImages;
        const length = images.length;
        const randomNumber = Math.floor(Math.random() * length)
        this.setState({
            randomImage:images[randomNumber].url
        })
    }

    render(){
        return (
          <>  
            <form className="meme-form"
            onSubmit={this.displayARandomImage.bind(this)}
            >

                <input type="text"
                name="topText"
                value={this.state.topText}
                placeholder="Enter Top Text"
                onChange = {this.handleFormFieldChange}
                />

                <input type="text"
                name="bottomText"
                value={this.state.bottomText}
                placeholder="Enter the bottom Text"
                onChange={this.handleFormFieldChange}
                />  
                <button>Gen</button>
            
            </form>

            <div className="meme">
                <img src={this.state.randomImage} alt='random image'/>
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
        </>    
        )
    }
} 