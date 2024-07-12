class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    insert(data){
        
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
    insertAt(pos,data){
        var node =new Node(data);
        var current=this.head;
        if(this.head==null){
            this.head=node;
        }
        else if(pos==1){
           node.next=current;
           this.head=node;
        }
    }
    removeAt(pos){
        var current=this.head;
        var prev=null;
        if(pos==1){
            this.head=current.next;
        }else{
            prev=current;
            current=current.next;

            for(var i=2;i<=pos;i++){
                if(i==pos){
                    prev.next=current.next;
                    break;
                }else{
              prev=current;
              current=current.next;
                }

            }
        }
    }
    display(){
        var current=this.head;
        while(current!=null){
            console.log(current.data);
            current=current.next;
        }
    }
}

var Ll =  new LinkedList();
//Ll.insert(3);
//Ll.insert(1);
//Ll.insert(6);
//Ll.insert(2);
//Ll.display();
Ll.insertAt(1,3);
Ll.insertAt(1,2);
Ll.insertAt(1,9);
console.log("************");
//Ll.removeAt(3);
Ll.display();
console.log("************");
