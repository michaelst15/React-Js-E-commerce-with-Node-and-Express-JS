import React, {Component} from 'react';
import axios from 'axios';
import './Style.css';


class Lifecycle extends Component {

    constructor() {
     super();
       this.state = {
           search: '',
           data: []                                              
       }  
    }                                                                   
   
   searching = (val) => {
      this.setState({search: val.target.value});
   }
 
    Api = () => {                                   
    axios.get(
       `https://newsapi.org/v2/everything?q=tesla&from=2022-02-15&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2`
    ) 
        .then(response => {
            this.setState ({
           data: response.data.articles
            });
        }) 
        .catch(err => {
            this.setState ({
              err
            });                
        })
    }                                                               

    handlerSubmit = () => {
        axios.get(
         `https://newsapi.org/v2/everything?q=${this.state.search}&from=2022-02-07&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2`
            ) 
        .then(response => {
            this.setState ({
           data: response.data.articles
            });
        })        
        .catch(err => {
            this.setState ({
              err
            });         
        })
    }

    berita = (e) => {
        e.preventDefault();
        this.handlerSubmit();
    }

    componentDidMount() {
        this.Api();
        
    }
                
    render() {    
        return (
            <div>
              <h2 className='bg-dark text-white'>Berita Terkini</h2>
                <div className='container'>                                     
                    <form action="" className='container' onSubmit={this.berita}>
                        <input 
                        className='mt-5' 
                        value={this.state.search}
                        onChange={this.searching}
                        type="text" 
                        placeholder='Search' 
                        />
                        <button className='btn btn-dark mt-2'>
                            Cari
                        </button>
                    </form>
                </div>
               <div className='container mt-5'>
                  {this.state.data.map((data) => {
                      return (
                            <div className='container bg-dark text-white w-50'>
                              <img src={data.urlToImage} className='mt-3'></img>
                                <div className='artikel'>
                                    <div>{data.title}</div>
                                    <div>{data.publishedAt}</div>
                                    <div>{data.description}</div>
                                </div>
                                    <button className='btn btn-primary mt-2'>Read more</button>
                            </div>
                              )  
                          })
                       }
               </div>
            </div>
        )
    }           
        
}

export default Lifecycle;