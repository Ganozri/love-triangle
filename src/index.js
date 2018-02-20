/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [])
{
  var it=0;

  for (var k = 0; k < preferences.length; k++)
  {

  if( k+1 === preferences[preferences[preferences[k]-1]-1] && k+1 != preferences[k])
  {
  it=it+1;
  delete preferences[k];
  delete preferences[preferences[k]-1];
  delete preferences[preferences[preferences[k]-1]-1];
  }
  }
  return it
  };
  // your implementation
