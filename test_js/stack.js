class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.head=null;
    }
    push(data){
        var node=new Node(data);
        if(this.head==null){
            this.head=node;
        }else{
            var current=this.head;
            this.head=node;
            this.head.next=current;

        }
    }
    popAtEnd(){
        var current=this.head;
        if(current==null){
            console.log("no data available");
        }else{
        var prev=null;
        while(current.next!=null){
            prev=current;
            current=current.next;
            
        }
        prev.next=null;
        current=null;
    }

    }
    popAtFront(){
        var current=this.head;
        if(current==null){
            console.log("nod data available");
        }else{
        this.head=current.next;
        }
        
    }
    listAll(){
        var current=this.head;
        if(current==null){
            return -1;
        }else{
            while(current!=null){
                console.log("data",current.data);
                current=current.next;
            }
        }
    }
}
var st=new stack();
st.popAtFront();
st.push(3);
st.push(5);
st.push(6);
st.push(8);
st.listAll();
console.log("*********");
st.popAtFront();
st.listAll();
console.log("*********");
st.popAtFront();
st.listAll();