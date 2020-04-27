import React from "react";

const Cell = (props) => {
  return (
    <div class="pa4">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 center" cellspacing="0">
          <thead>
            <tr>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                {props.creator_name}
              </th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                {props.date}
              </th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                {props.sanctuary}
              </th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">{props.id}</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Cell;
