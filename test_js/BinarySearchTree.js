class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;

    }
}
class BInarySearchTree{
    constructor(){
        this.root=null;
    }
    createnode(data){
        var node=new Node(data);
        if(this.root==null){
            this.root=node;
        }else{
            this.insertnode(this.root,node);
        }
    }
    insertnode(node,newnode){
        if(newnode.data<node.data){
        if(node.left==null){
            node.left=newnode;
        }else{
            this.insertnode(node.left,newnode)
        }
    }else if(newnode.data>node.data){
        if(node.right==null){
            node.right=newnode;
        }else{
            this.insertnode(node.right,newnode);
        }
    }
        
    }
    listBst(){
       this.listInOrder(this.root);

    }
    listInOrder(node){
        if(node!=null){
            this.listInOrder(node.left);
            console.log(node.data);
            this.listInOrder(node.right);
        }
    }
    searchelement(data){
        var res=this.search(this.root,data);
        console.log(res)

    }
    search(node,data){
        if(node==null){
            return "not found";
        }
        if(node.data==data){
            return "found";
        }
        if(data<node.data){
            console.log("INN");
          var myres=this.search(node.left,data);
          return myres;
        }
        if(data>node.data){
            console.log("Out");
            var myres= this.search(node.right,data);
            return myres;
        }
    }
    findheight(){
       var height=this.maxdepth(this.root);
       console.log("height of tree is ",height);
    }
    maxdepth(node){
       if(node==null){
        return 0;
       }else{
        //if the rdeapth is removed the height of left side of tree can be found.
        //if the ldeapth is removed then the height of the right side of the tree is found.
         var ldeapth=this.maxdepth(node.left);                                   
         var rdeapth=this.maxdepth(node.right);
         if(ldeapth>rdeapth){
            return (ldeapth+1);
         }else{
            return (rdeapth+1);
         }
       }
    }
    maxpath(){
        var maxpath=this.findmaxpath(this.root);
        console.log("max",maxpath);
    }
    findmaxpath(node){
        var path=0;
        var prevl;
        var prevr;
       if(node==null){
         return 0;
       }else{
        prevl=node.data
          this.findmaxpath(node.left);
          if(node.data<prevl){
            path++;
          }
          this.findmaxpath(node.right);
          if(node.data<prevr){
            path++
          }
          return path;
       }
    }
    findMax(){
        var max=this.maxFindFunc(this.root);
        console.log("max ele",max);
    }
    maxFindFunc(node){
        if(node==null){
            return Number.MIN_VALUE;
        }else{
            var res=node.data;
            var lres=this.maxFindFunc(node.left);
            var rres=this.maxFindFunc(node.right);
            if(lres>res){
                res=lres;
            }
            if(rres>res){
                
                res=rres;
            }
            return res;
        }
    }
    
}
var bst=new BInarySearchTree();
bst.createnode(50);
bst.createnode(60);
bst.createnode(40);
bst.createnode(30);
bst.createnode(45);
bst.createnode(55);
bst.createnode(10);
console.log("*********");
bst.listBst();
console.log("*********");
//bst.searchelement(40);
//console.log("*********");
//bst.findheight();
//bst.maxpath();
bst.findMax();
