/**
* Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/



class Node {

  constructor(tag, id, classes, children) {

    
    // Tag name of the node.
    this.tag = tag;
    // Array of CSS class names (string) on this element.
    this.classes = classes;
    // id name of the specific node
    this.id=id;
    // Array of children nodes.
    this.children = children; // All children are of type Node

    
  }

  // Creating methods that can be used for calling the specific constructor parameters in the search function


  // gets the ID
  getId(){
      return this.id;
  };

  // gets the Tag
  getTag() 
  {
    return this.tag;
  };

  // gets the 0th index or the main class name from the class names list

  getClasses()
  {
    return this.classes[0];
  };

  // gets the 1st index or the sub class namefrom the class names list
  getSubClass(){
    return this.classes[1];
  }

  // gets the children of the particular particular node
  getChildren()
  {
    return this.children;
  };

  
  /**
  * Returns descendent nodes matching the selector. Selector can be 
  * a tag name or a CSS class name.
  * 
  * For example: 
  * 
  * 1.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `span` should return 3 span nodes in this order
  * span-1 -> span-2 -> span-3.
  *
  * 2.
  * <div> 
  *   <span id="span-1" class="note"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `.note` should return one span node with `note` class.
  * 
  // *  the selector string.
  // * @returns {Array} Array of descendent nodes.
  // * @public
  */

  

 
  search(selector) {

    // take string as an input
    // give an array of descendent values as output
    
    
  
    if(selector.startsWith(".")){
          if(selector.slice(1)=== this.getClasses() || selector.slice(1)=== this.getSubClass() )
          {
            //return Array.of(this.id) ;
            var arr=new Array(this.id);
            for(let i=0; i<this.getChildren().length; i++)
            {
              if(selector === this.getChildren()[i].classes[i])
              {     
                  arr.push(this.getChildren()[i].id);
                  //continue;
              }
              // else
              // {  
              //   //console.log(`Invalid Input !, please enter the correct class name for the corresponding node`);
              // }
            }
            return arr;
          }

          else if(selector.slice(1)!== this.getClasses() || selector.slice(1)!== this.getSubClass())
          {
            var arr=new Array();
              for(var i=0; i<this.getChildren().length; i++)
              {
                if(selector.slice(1)===this.getChildren()[i].classes[i])
                {
                  arr.push(this.getChildren()[i].id);
                }
                for(let j=0; j<this.getChildren()[i].getChildren().length; j++)
                  {

                    if(selector === this.getChildren()[i].getChildren()[j].classes){
                      arr.push(this.getChildren()[i].getChildren()[j].id);
                    }   
                  }
                  //return arr;
              }
            return arr;
              
      
            // else{

            //   //return 'This node does not have the class specified';
            // }  
          }
        }

    else
      {
        
        if(selector === this.getTag())
        {
            console.log(this.getChildren()[2].getChildren()[1].tag);
            var arr=new Array(this.id);
            for(let i=0; i<this.getChildren().length; i++)
            {
              if(selector === this.getChildren()[i].tag)
              {     
                  arr.push(this.getChildren()[i].id);
                  continue;
              }
              else if(selector !== this.getChildren()[i].tag){
                  
                for(let j=0; j<this.getChildren()[i].getChildren().length; j++)
                {

                  if(selector === this.getChildren()[i].getChildren()[j].tag){
                    arr.push(this.getChildren()[i].getChildren()[j].id);
                  }   
                }
                  //return arr;

              }
              // else
              // {  
              //   console.log(`Invalid Input !, please enter the correct class name for the corresponding node`);
              // }
            }
            return arr;

        // return Array.from(this.getChildren())[9].tag;

        }

        else
        {
            if(selector !== this.getTag())
            {
                var arr=new Array();
                for(let i=0; i<this.getChildren().length; i++)
                {
                  if(selector === this.getChildren()[i].tag)
                  {     
                      arr.push(this.getChildren()[i].id);  
                      
                  }
                  else{

                    for(let j=0; j<this.getChildren()[i].getChildren().length; j++)
                    {
                      
                      if(selector === this.getChildren()[i].getChildren()[j].tag)
                      {
                        arr.push(this.getChildren()[i].getChildren()[j].id);
                        
                      }
                      else{
                        continue;
                      }  
                    }
                    // return arr;
                    }
                }
                return arr; 
                  
                  
              }
                // else{
                //   `Invalid Input !, please enter the correct tag for the corresponding node`;
                // }
            }
            // else
            // {

            // }    
       
          //return Array.of(this.getId(), this.getChildren());
      
          
          // return Array.of(this.id, this.getChild1(), this.getChild2());
          //return Array.of(this.getId(), this.getSibling(),this.getChild1(), this.getChild2(), this.getChild3(), this.getChild4(), this.getChild5(), this.getChild6());
          //return selector;
        } 
       
    }
} 


/*STEP2: The Node creation */
let span6 = new Node("span", "span-6", ["randomSpan"], []);
let label = new Node("label", "lbl-1", [], [], []);
let span5 = new Node("span", "span-5", ["note","mania"], []) ;
let span4 = new Node("span", "span-4", ["mania"], []);
let section = new Node("section", "sec-1", [], []);
let span3 = new Node("span", "span-3", ["sub1-span3"], []);
let p1 = new Node("p", "para-1", ["sub1-p1", "note"], []);
let span1 = new Node("span", "span-1", ["note"], [span3,p1, section, label, span4, span5]);
let span2 = new Node("span", "span-2", [], [span3,p1]);
let divNode2 = new Node("div", "div-2", ["subContainer1"], [p1,span3]);
let divNode3 = new Node("div", "div-3", ["subContainer2"], [section, label]);
let divNode4 = new Node("div", "div-4", [], [span4,span5]);
let divNode1 = new Node("div", "div-1", ["mainContainer"], [span1, span2, divNode2, divNode3, divNode4]); //, span3, p1, section, label, span4, span5
let body = new Node("body", "content", [], [divNode1, span6]);



/*TEST CASES*/ 


console.log("Started...");

// Test case 1 - passed
//console.log(divNode1.search("span"));

// Test case 2 - not passed
//console.log(divNode1.search(".note"));

// // Test case 3 - passed
//console.log(divNode1.search("label"));

// // Test case 4 - passed
//console.log(p1.search(".note"));


// // Test case 5 - passed
//console.log(divNode1.search("div"));


// // Test case 6 - empty array
//console.log(span6.search("div"));


// // Test case 7 - passed empty array
//console.log(divNode2.search("section"));

// // Test case 8 - throw invalid statement
//console.log(body.search());
// // Error conditions need to be handled
// // invalid input need to be handled

// // Test case 9 - passed
//console.log(body.search("section"));

// // Test case 10 - passed
//console.log(divNode1.search(".randomSpan"));

