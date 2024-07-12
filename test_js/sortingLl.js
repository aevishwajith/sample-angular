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
    sortLl(){
        var temp=null;
        var currentI=null;
        var currentJ=null;
        for(currentI=this.head;currentI!=null;currentI=currentI.next){
            for(currentJ=currentI.next;currentJ!=null;currentJ=currentJ.next){
                if(currentI.data>currentJ.data){
                    temp=currentI.data;
                    currentI.data=currentJ.data;
                    currentJ.data=temp;
                }
            }
        }
    }
    removeDuplicate(){
        var prev =null;
        var currentI=null;
        var currentJ=null;
        for(currentI=this.head;currentI!=null;currentI=currentI.next){
            for(currentJ=currentI.next;currentJ!=null;currentJ=currentJ.next){
                if(currentI.data==currentJ.data){
                   currentI.next=currentJ.next;
                }
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
Ll.insert(3);
Ll.insert(9);
Ll.insert(4);
Ll.listAll();
console.log("***********");
Ll.sortLl();
Ll.listAll();
console.log("***********");
Ll.removeDuplicate();
Ll.listAll();
