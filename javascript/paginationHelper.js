// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this._items = collection;
    this._itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this._items.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this._items.length / this._itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    if (pageIndex < 0 || pageIndex > this.pageCount() - 1) {
        return -1;
    }
    return pageIndex === this.pageCount() - 1 ? this._items.length % this._itemsPerPage : this._itemsPerPage;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if (itemIndex < 0 || itemIndex > this._items.length - 1) {
        return -1;
    }
    return Math.floor((itemIndex + 1) / this._itemsPerPage);
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log("pageCount="+helper.pageCount()); //should == 2
console.log("itemCount="+helper.itemCount()); //should == 6
console.log("pageItemCount");
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid
console.log("pageIndex");
console.log(helper.pageIndex(3)); // should == 1 
console.log(helper.pageIndex(4)); // should == 2