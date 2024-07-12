
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
        reverseLl(){
            var current=this.head;
            var next=null;
            var prev=null;
            while(current!=null){
                next=current.next;
                current.next=prev;
                prev=current;
                current=next;
            }
            this.head=prev;
        }
        reverseAtPos(pos){
          var start=this.head;
          var current=start.next;
          var next=null;
          var prev=start;
          var count=2;
          while(current!=null && count<pos){
            if(pos>=2){ 
                next=current.next;
                current.next=prev;
                prev=current;
                current=next;

            }
            count++;
          }
          start.next=current.next;
          current.next=prev;
          this.head=current;
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
Ll.insert(9);
Ll.insert(7);
Ll.listAll();
console.log("***********");
Ll.reverseAtPos(6);
Ll.listAll();
