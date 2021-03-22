import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.reverse().map(post => (
        // <li key={post.id} className='list-group-item'>
        //   {post.Date}   {post.Amount}    {post.TransactionType}
        // </li>
<table>
<tr>
<td>{post.Date}</td>
<td >{post.Discription}</td>
<td>{post.TransactionType == 'Debit' ? <>{post.Amount}</> : <p></p>}</td>
<td>{post.TransactionType == 'Credit' ? <>{post.Amount}</> : <p></p>}</td>
<td><>{post.TransactionType == 'Debit' ? <>{Number(post.Balance) - Number(post.Amount)}</> : <>{Number(post.Balance) + Number(post.Amount)}</>}</></td>





</tr>
  
</table>


      ))}
    </ul>
  );
};

export default Posts;