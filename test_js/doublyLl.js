class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}
class DoublyLinkedList{
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
        node.prev=current;
       }
    }
    insertAt(data,pos){
        var current=this.head;
        var node=new Node(data);
        if(pos==1){
            this.head=node;
            this.head.next=current;
        }else{
            var prev=null;
            var count=1;
            while(current!=null){
               if(pos==count){
                prev.next=node;
                node.prev=prev;
                node.next=current;

               }
               prev=current;
               current=current.next;
               count++;
            }
        }
    }
    listAll(){
        var current=this.head;
        while(current!=null){
            console.log(current.data);
            current=current.next;
        }
    }
}
var Dll=new DoublyLinkedList();
Dll.insert(2);
Dll.insert(1);
Dll.insert(4);
Dll.insert(3);
Dll.listAll();
console.log("************");
Dll.insertAt(9,1);
Dll.listAll();
console.log("************");
Dll.insertAt(8,1);
Dll.listAll();


