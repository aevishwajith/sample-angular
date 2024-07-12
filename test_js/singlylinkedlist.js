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
    remove(data){
        var current=this.head;
        var prev=null;
        if(current==null){
            return -1;
        }else{
            while(current!=null){
                if(current.data==data){
                    if(prev==null){
                        this.head=current.next;
                    }else{
                        prev.next=current.next;
                    }
                    
                   
                }
                prev=current;
                current=current.next;
            }
        }
    }
    insertAt(data,pos){
       
        var current=this.head;
        var node=new Node(data);
        if(pos==1){
            this.head=node;
            this.head.next=current;
        }else{
            
            var count=1;
            var prev=null
            while(current!=null){
              if(count==pos){
                prev.next=node;
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
var Ll=new LinkedList();
Ll.insert(4);
Ll.insert(2);
Ll.insert(3);
Ll.insert(8);
Ll.listAll();
console.log("***********");
Ll.insertAt(10,1);
Ll.listAll();
Ll.remove(2);
console.log("***********");
Ll.listAll();