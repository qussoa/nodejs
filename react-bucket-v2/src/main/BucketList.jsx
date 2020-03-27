import React, { Component } from "react";
import BucketItem from "./BucketItem";
import BucketContext from "../provider/BucketProvider";

class BucketList extends Component {
  static contextType = BucketContext;

  render() {
    const { bucketList } = this.context;
    const list = bucketList.map(bucket => (
      <BucketItem key={bucket.b_id} bucketItem={bucket} />
    ));
    /*
    const list1 = bucketList.map(bucket => {
      return <BucketItem key={bucket.id} bucketItem={bucket} />;
    });
*/
    return (
      <section className="w3-container-fluid">
        <table className="w3-table w3-table-all">
          <tr>
            <th>FLAG</th>
            <th>추가일정</th>
            <th>BUCKET</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
          {list}
        </table>
      </section>
    );
  }
}

export default BucketList;
