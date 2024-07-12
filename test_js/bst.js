class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(data){
        var node=new Node(data);
        if(this.root==null){
            this.root=node;
        }else{
            this.insertnode(this.root,node)
        }
    }
    insertnode(node,newnode){
        if(newnode.data<node.data){
            if(node.left==null){
                node.left=newnode;
            }else{
                this.insertnode(node.left,newnode)
            }
        }else{
            if(node.right==null){
                node.right=newnode;
            }else{
                this.insertnode(node.right,newnode)
            }
        }
    }
    listBst(){
        this.inorder(this.root);
    }
    inorder(node)
    {
        console.log("called-->")
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
    console.log("outside");
    }
}
var bst=new BST();
bst.insert(10);
bst.insert(6);
bst.insert(12);
bst.insert(5);
bst.insert(9);
bst.insert(11);
bst.listBst();