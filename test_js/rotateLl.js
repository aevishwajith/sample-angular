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
        //console.log("entered----");
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

    rotateLl(pos){
        var current=this.head;
        var count=1;
        var kthNode=null;
        while(current!=null){
            if(count==pos){
               kthNode=current;
               break;

            }else{
                count++;
                current=current.next;
            }
        }
        while(current.next!=null){
            current=current.next;
        }
        current.next=this.head;
        this.head=kthNode.next;
        
        kthNode.next=null;
    }
}

var Ll=new LinkedList();
Ll.insert(4);
Ll.insert(2);
Ll.insert(3);
Ll.insert(8);
Ll.insert(5);
Ll.insert(9);
Ll.insert(7);
Ll.listAll();
console.log("***********");
Ll.rotateLl(4);
Ll.listAll();
console.log("***********");