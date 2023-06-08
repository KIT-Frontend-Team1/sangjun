// reducer - 컴포넌트의 상태 업데이트 로직

    //dispatch
    const reducer = (initialstate, action) => {
        switch (action.type) {
            //삭제 케이스
            case "DELETE": 
                return initialstate.filter((item) => item.id !== action.id);
            case "ADD":   
                const newItem = {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                };
                return [...initialstate, newItem];
                //...-> 전개 연산자 {},[]를 없애준다.
            default:
                return initialstate;    
        }
    };

    export default reducer;

