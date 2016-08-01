var React = require('react');
// class Hello extends React.Component {
//   render() {
//     return (
//       <h1>Hello {this.props.name}!</h1>
//     );
//   }
// }


var Timecounter = React.createClass({
    render : function(){
        var styleObj = {
            display:"inline-block"
        }

        var template=
            ( <div className="timecounter">
                <div className="timecounter-wrapper">
                    公元
                    <div className="year" style={styleObj}>{this.props.curDate.yy} 年 </div>
                    <div className="mounth" style={styleObj}>{this.props.curDate.mm} 月 </div>
                    <div className="day" style={styleObj}>{this.props.curDate.dd} 日 </div>
                    <div className="hour" style={styleObj}>{this.props.curDate.h} ：</div>
                    <div className="day" style={styleObj}>{this.props.curDate.m} ：</div>
                    <div className="second" style={styleObj}>{this.props.curDate.s}</div>
                </div>
            </div> );
        return template;
    }
});