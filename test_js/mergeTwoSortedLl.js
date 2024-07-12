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
    mergeLl(L1,L2){
        L1=L1.head;
        L2=L2.head;
       var L3=new Node(null,null);
       this.head=L3;
       while(L1!=null && L2!=null){
        if(L1.data<=L2.data){
            
            L3.next=L1;
            L1=L1.next;
        }else{
           
            L3.next=L2;
            L2=L2.next;
        }
        L3=L3.next;
       }
       if(L1==null){
        L3.next=L2;
       }else{
        L3.next=L1;
       }
    }
    addTwoList(L1,L2){
       
        this.head=null;
        L1=L1.head;
        L2=L2.head;
        while(L1!=null && L2!=null){
            var sum=L1.data+L2.data;
            var L3=new Node(sum,null);
            if(this.head==null){
                this.head=L3;
            }else{
                var current=this.head;
                while(current.next!=null){
                    current=current.next
                }
                current.next=L3;

            }
            
            L1=L1.next;
            L2=L2.next;
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
var Ll1=new LinkedList();
var Ll2=new LinkedList();
var mr=new LinkedList();
var add=new LinkedList();
Ll1.insert(1);
Ll1.insert(3);
Ll1.insert(4);
Ll1.insert(8);

Ll1.listAll();
console.log("***********");
Ll2.insert(2);
Ll2.insert(5);
Ll2.insert(6);
Ll2.insert(9);
//console.log(Ll2);
Ll2.listAll();
console.log("***********");
//mr.mergeLl(Ll1,Ll2);
add.addTwoList(Ll1,Ll2);
add.listAll();
