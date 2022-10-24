```javascript
function binary_search(list, item) {
	low = 0;
	high = list.length - 1;
	
	while (low <= high) {    
	  mid = Math.floor((low + high) / 2);
	  guess = list[mid];
		if (guess === item)
			return mid;
		if (item < guess)
			high = mid - 1;
		else
			low = mid + 1;
	}
	return -1;
}
```
