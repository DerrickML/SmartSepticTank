import{OperatorTypes}from'./type-enums';import{binaryInsertionSort}from'../utils/sort';export default function pipe(...a){let b,c=[],d=[],e=[],f=(a,b)=>{let c=[],d=a.length;for(let e=0;e<d;e++)b[e]||c.push(a[e]);return 0<c.length&&binaryInsertionSort(c,(c,a)=>c.type-a.type),c};b=a.length;for(let g=0;g<b;g++)switch(a[g].type){case OperatorTypes.IndexOpsFilter:case OperatorTypes.GenericFilter:c.push(a[g]),d.push(!1);break;case OperatorTypes.Select:case OperatorTypes.Sort:c.push(a[g]),d.push(!0);break;case OperatorTypes.GroupBy:e=e.concat(f(c,d),a[g]),c=[],d=[];}return e=e.concat((a=>{let b=[],c=a.length;binaryInsertionSort(a,(c,a)=>c.type-a.type),b.push(a[0]);for(let d=1;d<c;d++)3<=a[d].type&&a[d].type===b[b.length-1].type&&b.pop(),b.push(a[d]);return b})(c)),e}