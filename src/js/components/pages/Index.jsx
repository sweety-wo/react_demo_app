import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <div className="row m-t">
                    <div className="col-lg-3">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-success pull-right">Monthly</span>
                                <h5>Income</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">40 886,200</h1>
                                <div className="stat-percent font-bold text-success">98% <i className="fa fa-bolt"></i></div>
                                <small>Total income</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-info pull-right">Annual</span>
                                <h5>Orders</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">275,800</h1>
                                <div className="stat-percent font-bold text-info">20% <i className="fa fa-level-up"></i></div>
                                <small>New orders</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-primary pull-right">Today</span>
                                <h5>Vistits</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">106,120</h1>
                                <div className="stat-percent font-bold text-navy">44% <i className="fa fa-level-up"></i></div>
                                <small>New visits</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-danger pull-right">Low value</span>
                                <h5>User activity</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">80,600</h1>
                                <div className="stat-percent font-bold text-danger">38% <i className="fa fa-level-down"></i></div>
                                <small>In first month</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>New data for the report</h5>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <i className="fa fa-wrench"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-user">
                                        <li><a href="#">Config option 1</a>
                                        </li>
                                        <li><a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="ibox-content ibox-heading">
                                <h3>Stock price up
                                    <div className="stat-percent text-navy">34% <i className="fa fa-level-up"></i></div>
                                </h3>
                                <small><i className="fa fa-stack-exchange"></i> New economic data from the previous quarter.</small>
                            </div>
                            <div className="ibox-content">
                                <div>

                                    <div className="pull-right text-right">

                                        <span className="bar_dashboard"></span><svg className="peity" height="16" width="100"><rect fill="#1ab394" x="0" y="7.111111111111111" width="2.2580645161290325" height="8.88888888888889"></rect><rect fill="#d7d7d7" x="3.2580645161290325" y="10.666666666666668" width="2.2580645161290325" height="5.333333333333333"></rect><rect fill="#1ab394" x="6.516129032258065" y="0" width="2.2580645161290325" height="16"></rect><rect fill="#d7d7d7" x="9.774193548387098" y="5.333333333333334" width="2.2580645161290325" height="10.666666666666666"></rect><rect fill="#1ab394" x="13.03225806451613" y="7.111111111111111" width="2.2580645161290325" height="8.88888888888889"></rect><rect fill="#d7d7d7" x="16.290322580645164" y="0" width="2.2580645161290325" height="16"></rect><rect fill="#1ab394" x="19.548387096774196" y="3.555555555555557" width="2.2580645161290325" height="12.444444444444443"></rect><rect fill="#d7d7d7" x="22.806451612903228" y="10.666666666666668" width="2.2580645161290325" height="5.333333333333333"></rect><rect fill="#1ab394" x="26.06451612903226" y="7.111111111111111" width="2.2580645161290325" height="8.88888888888889"></rect><rect fill="#d7d7d7" x="29.322580645161292" y="12.444444444444445" width="2.2580645161290325" height="3.5555555555555554"></rect><rect fill="#1ab394" x="32.58064516129033" y="8.88888888888889" width="2.2580645161290325" height="7.111111111111111"></rect><rect fill="#d7d7d7" x="35.83870967741936" y="3.555555555555557" width="2.2580645161290325" height="12.444444444444443"></rect><rect fill="#1ab394" x="39.09677419354839" y="10.666666666666668" width="2.2580645161290325" height="5.333333333333333"></rect><rect fill="#d7d7d7" x="42.35483870967742" y="12.444444444444445" width="2.2580645161290325" height="3.5555555555555554"></rect><rect fill="#1ab394" x="45.612903225806456" y="3.555555555555557" width="2.2580645161290325" height="12.444444444444443"></rect><rect fill="#d7d7d7" x="48.87096774193549" y="0" width="2.2580645161290325" height="16"></rect><rect fill="#1ab394" x="52.12903225806452" y="5.333333333333334" width="2.2580645161290325" height="10.666666666666666"></rect><rect fill="#d7d7d7" x="55.38709677419355" y="8.88888888888889" width="2.2580645161290325" height="7.111111111111111"></rect><rect fill="#1ab394" x="58.645161290322584" y="7.111111111111111" width="2.2580645161290325" height="8.88888888888889"></rect><rect fill="#d7d7d7" x="61.903225806451616" y="3.555555555555557" width="2.2580645161290325" height="12.444444444444443"></rect><rect fill="#1ab394" x="65.16129032258065" y="10.666666666666668" width="2.2580645161290325" height="5.333333333333333"></rect><rect fill="#d7d7d7" x="68.41935483870968" y="12.444444444444445" width="2.2580645161290325" height="3.5555555555555554"></rect><rect fill="#1ab394" x="71.67741935483872" y="14.222222222222221" width="2.2580645161290325" height="1.7777777777777777"></rect><rect fill="#d7d7d7" x="74.93548387096774" y="15" width="2.2580645161290325" height="1"></rect><rect fill="#1ab394" x="78.19354838709678" y="0" width="2.2580645161290325" height="16"></rect><rect fill="#d7d7d7" x="81.45161290322581" y="7.111111111111111" width="2.2580645161290325" height="8.88888888888889"></rect><rect fill="#1ab394" x="84.70967741935485" y="5.333333333333334" width="2.2580645161290325" height="10.666666666666666"></rect><rect fill="#d7d7d7" x="87.96774193548387" y="1.7777777777777786" width="2.2580645161290325" height="14.222222222222221"></rect><rect fill="#1ab394" x="91.22580645161291" y="10.666666666666668" width="2.2580645161290325" height="5.333333333333333"></rect><rect fill="#d7d7d7" x="94.48387096774194" y="12.444444444444445" width="2.2580645161290325" height="3.5555555555555554"></rect><rect fill="#1ab394" x="97.74193548387098" y="14.222222222222221" width="2.2580645161290325" height="1.7777777777777777"></rect></svg>
                                        <br/>
                                        <small className="font-bold">$ 20 054.43</small>
                                    </div>
                                    <h4>NYS report new data!
                                        <br/>
                                        <small className="m-r"><a href="graph_flot.html"> Check the stock price! </a> </small>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Read below comments and tweets</h5>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <i className="fa fa-wrench"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-user">
                                        <li><a href="#">Config option 1</a>
                                        </li>
                                        <li><a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="ibox-content no-padding">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <p><a className="text-info" href="#">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <small className="block text-muted"><i className="fa fa-clock-o"></i> 1 minuts ago</small>
                                    </li>
                                    <li className="list-group-item">
                                        <p><a className="text-info" href="#">@Stock Man</a> Check this stock chart. This price is crazy! </p>
                                        <small className="block text-muted"><i className="fa fa-clock-o"></i> 2 hours ago</small>
                                    </li>
                                    <li className="list-group-item">
                                        <p><a className="text-info" href="#">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>
                                        <small className="block text-muted"><i className="fa fa-clock-o"></i> 2 minuts ago</small>
                                    </li>
                                    <li className="list-group-item ">
                                        <p><a className="text-info" href="#">@Jonathan Febrick</a> The standard chunk of Lorem Ipsum</p>
                                        <small className="block text-muted"><i className="fa fa-clock-o"></i> 1 hour ago</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Timeline</h5>
                                <span className="label label-primary">Meeting today</span>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <i className="fa fa-wrench"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-user">
                                        <li><a href="#">Config option 1</a>
                                        </li>
                                        <li><a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="ibox-content inspinia-timeline">

                                <div className="timeline-item">
                                    <div className="row">
                                        <div className="col-xs-3 date">
                                            <i className="fa fa-briefcase"></i>
                                            6:00 am
                                            <br/>
                                            <small className="text-navy">2 hour ago</small>
                                        </div>
                                        <div className="col-xs-7 content no-top-border">
                                            <p className="m-b-xs"><strong>Meeting</strong></p>

                                            <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="row">
                                        <div className="col-xs-3 date">
                                            <i className="fa fa-file-text"></i>
                                            7:00 am
                                            <br/>
                                            <small className="text-navy">3 hour ago</small>
                                        </div>
                                        <div className="col-xs-7 content">
                                            <p className="m-b-xs"><strong>Send documents to Mike</strong></p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="row">
                                        <div className="col-xs-3 date">
                                            <i className="fa fa-coffee"></i>
                                            8:00 am
                                            <br/>
                                        </div>
                                        <div className="col-xs-7 content">
                                            <p className="m-b-xs"><strong>Coffee Break</strong></p>
                                            <p>
                                                Go to shop and find some products.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="row">
                                        <div className="col-xs-3 date">
                                            <i className="fa fa-phone"></i>
                                            11:00 am
                                            <br/>
                                            <small className="text-navy">21 hour ago</small>
                                        </div>
                                        <div className="col-xs-7 content">
                                            <p className="m-b-xs"><strong>Phone with Jeronimo</strong></p>
                                            <p>
                                                Lorem Ipsum has been the industry's standard dummy text ever since.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Index;
