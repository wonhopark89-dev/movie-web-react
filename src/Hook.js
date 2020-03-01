
import React, { Component, useState, useEffect, useRef, createRef } from 'react';
import Axios from 'axios';

// class App extends Component {
//     state = {
//         count: 0
//     };

//     modify = n => {
//         this.setState({
//             state: n
//         });
//     };

//     render() {
//         const { count } = this.state;
//         return (
//             <>
//                 <div>{count}</div>
//                 <button onClick={() => {
//                     this.modify(count + 1);
//                     console.log(`click------${count}`);
//                 }
//                 }>Increament</button>
//             </>
//         );
//     }
// }


/**
 * class component -> use hook example
 */

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [email, setEmail] = useState("");
//     const updateEmail = (e) => {
//         const {
//             target: { value }
//         } = e;
//         setEmail(value);
//     }

//     return (
//         <>
//             {count}
//             <button onClick={() => setCount(count + 1)}> Increament </button>
//             <button onClick={() => setCount(count - 1)}> Decreament </button>
//             <input placeholder="Email" value={email} onChange={updateEmail}></input>
//         </>
//     );
// }

// export default App;


function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    const onChange = (e) => {
        const {
            target: { value }
        } = e;
        setValue(e);

        return { value, onChange };
    }
}

function useFetch(url) {
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const callUrl = async () => {
        try {
            const { data } = await Axios.get(url);
            // throw Error();
            setPayload(data);
        } catch {
            setError("error ㅠㅠㅠㅠㅠ");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        callUrl();
    }, []);

    return { payload, loading, error };
}

// function App() {
//     const name = useInput("");
//     const { payload, loading, error } = useFetch("http://aws.random.cat/meow");
//     return (

//         <div className="App">
//             <h1>use Hook</h1>
//             <br />
//             <input {...name} placeholder="what your name"></input>
//             {/* <input value={name.value} onChange={name.onChange} placeholder="what your name 2"></input> */}

//             <br />
//             {loading && <span>loading your cat</span>}
//             {!loading && error && <span>{error}</span>}
//             {!loading && payload && <img src={payload.file} width="150"></img>}
//         </div>

//     );
// }


function clickOutside(fn) {
    useEffect(() => {
        document.addEventListener("click", handleClick);
    }, []);
    
    const ref = createRef();
    const handleClick = e => {
        console.log(e.target);
        if(!ref.current.contains(e.target)) {
            fn();
        }
    };


 
    return ref;
}

function App() {

    const onClickOutside = () => {
        console.log("lalala");
    }
    // const inputRef = useRef();
    const refs = clickOutside(onClickOutside);

    // setTimeout(() => {
    //     inputRef.current.focus(); // 5초후에 해당 엘리먼트 포커싱
    // }, 5000);

    return (
        <div className="App">
            <div ref={refs}>
                <h1>this should be popup</h1>
                <h2>ppppopopopop</h2>
                <input type="text"></input>
            </div>
        </div>
    );
}

export default App;