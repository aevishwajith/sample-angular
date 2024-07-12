

// JavaScript program to find height of tree

// A binary tree node
class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=this.right=null;
	}
}

	let root;
	
	/* Compute the "maxDepth" of a tree -- the number of
	nodes along the longest path from the root node
	down to the farthest leaf node.*/
	function maxDepth(node)
	{
        console.log("node:"+JSON.stringify(node));
		if (node == null)
			return -1;
		else
		{
			/* compute the depth of each subtree */
           // console.log("node inside left:"+JSON.stringify(node));
			let lDepth = maxDepth(node.left);
            //console.log("lDepth:"+lDepth);
           // console.log("node inside right:"+JSON.stringify(node));
			let rDepth = maxDepth(node.right);
            //console.log("rDepth:"+rDepth);

			/* use the larger one */
			if (lDepth > rDepth){
               // console.log("lDepth return:",lDepth+1);
				return (lDepth + 1);
            }
			else{
               // console.log("rDepth return:",rDepth+1);
				return (rDepth + 1);
            }
		}
	}
	
	/* Driver program to test above functions */
	
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);

		console.log("Height of tree is : " +
									maxDepth(root));




// This code is contributed by rag2127
//Correction done by Amit Srivastav


