class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class queue{
    constructor(){
        this.head=null;
    }
    push(data){
        var node=new Node(data);
        if(this.head==null){
            this.head=node;
        }else{
            var current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=node;
        }
    }
    pop(){
        var current=this.head;
        if(current==null){
            console.log("no data available");
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

var qu=new queue();
qu.pop();
qu.push(1);
qu.push(2);
qu.push(3);
qu.push(4);
qu.listAll();
console.log("********");
qu.pop();
qu.listAll();
console.log("********");
qu.pop();
qu.listAll();
console.log("********");
qu.push(5);
qu.listAll();