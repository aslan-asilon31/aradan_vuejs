<script>
import axios from 'axios';
import BackendLayout from '../../components/Backend/BackendLayout.vue';

export default {
    data() {
        return {
            products: [],
        };
    },
    components: {
        BackendLayout
    },
    mounted() {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                this.products = response.data;
            })
            .catch(error => {
                console.error(error);
            });
    },
};
</script>

<template>
    <BackendLayout>
        <div className="content-wrapper">
            <!-- Content Header (Page header) -->
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div><!-- /.col -->
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <section className="content">
                <div className="container-fluid">
                    <!-- Small boxes (Stat box) -->
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <!-- small box -->
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>150</h3>

                                    <p>New Orders</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                        <div className="col-lg-3 col-6">
                            <!-- small box -->
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>53<sup style="font-size: 20px">%</sup></h3>

                                    <p>Bounce Rate</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                        <div className="col-lg-3 col-6">
                            <!-- small box -->
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>44</h3>

                                    <p>User Registrations</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                        <div className="col-lg-3 col-6">
                            <!-- small box -->
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>65</h3>

                                    <p>Unique Visitors</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph"></i>
                                </div>
                                <a href="#" className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                    </div>
                    <!-- /.row -->
                    <!-- Main row -->
                    <div className="row">
                        <!-- Left col -->
                        <section className="col-lg-7 connectedSortable">
                            <!-- Custom tabs (Charts with tabs)-->
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="fas fa-chart-pie mr-1"></i>
                                        Sales
                                    </h3>
                                    <div className="card-tools">
                                        <ul className="nav nav-pills ml-auto">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#revenue-chart"
                                                    data-toggle="tab">Area</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div><!-- /.card-header -->
                                <div className="card-body">
                                    <div className="tab-content p-0">
                                        <!-- Morris chart - Sales -->
                                        <div className="chart tab-pane active" id="revenue-chart"
                                            style="position: relative; height: 300px;">
                                            <canvas id="revenue-chart-canvas" height="300" style="height: 300px;"></canvas>
                                        </div>
                                        <div className="chart tab-pane" id="sales-chart"
                                            style="position: relative; height: 300px;">
                                            <canvas id="sales-chart-canvas" height="300" style="height: 300px;"></canvas>
                                        </div>
                                    </div>
                                </div><!-- /.card-body -->
                            </div>
                            <!-- /.card -->

                            <!-- DIRECT CHAT -->
                            <div className="card direct-chat direct-chat-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Direct Chat</h3>

                                    <div className="card-tools">
                                        <span title="3 New Messages" className="badge badge-primary">3</span>
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool" title="Contacts"
                                            data-widget="chat-pane-toggle">
                                            <i className="fas fa-comments"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div className="card-body">
                                    <!-- Conversations are loaded here -->
                                    <div className="direct-chat-messages">
                                        <!-- Message. Default to the left -->
                                        <div className="direct-chat-msg">
                                            <div className="direct-chat-infos clearfix">
                                                <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                            </div>
                                            <!-- /.direct-chat-infos -->
                                            <img className="direct-chat-img" :src="user1" alt="message user image">
                                            <!-- /.direct-chat-img -->
                                            <div className="direct-chat-text">
                                                Is this template really for free? That's unbelievable!
                                            </div>
                                            <!-- /.direct-chat-text -->
                                        </div>
                                        <!-- /.direct-chat-msg -->

                                        <!-- Message to the right -->
                                        <div className="direct-chat-msg right">
                                            <div className="direct-chat-infos clearfix">
                                                <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                            </div>
                                            <!-- /.direct-chat-infos -->
                                            <img className="direct-chat-img" :src="user3" alt="message user image">
                                            <!-- /.direct-chat-img -->
                                            <div className="direct-chat-text">
                                                You better believe it!
                                            </div>
                                            <!-- /.direct-chat-text -->
                                        </div>
                                        <!-- /.direct-chat-msg -->

                                        <!-- Message. Default to the left -->
                                        <div className="direct-chat-msg">
                                            <div className="direct-chat-infos clearfix">
                                                <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                                            </div>
                                            <!-- /.direct-chat-infos -->
                                            <img className="direct-chat-img" :src="user1" alt="message user image">
                                            <!-- /.direct-chat-img -->
                                            <div className="direct-chat-text">
                                                Working with AdminLTE on a great new app! Wanna join?
                                            </div>
                                            <!-- /.direct-chat-text -->
                                        </div>
                                        <!-- /.direct-chat-msg -->

                                        <!-- Message to the right -->
                                        <div className="direct-chat-msg right">
                                            <div className="direct-chat-infos clearfix">
                                                <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                                            </div>
                                            <!-- /.direct-chat-infos -->
                                            <img className="direct-chat-img" :src="user3" alt="message user image">
                                            <!-- /.direct-chat-img -->
                                            <div className="direct-chat-text">
                                                I would love to.
                                            </div>
                                            <!-- /.direct-chat-text -->
                                        </div>
                                        <!-- /.direct-chat-msg -->

                                    </div>
                                    <!--/.direct-chat-messages-->

                                    <!-- Contacts are loaded here -->
                                    <div className="direct-chat-contacts">
                                        <ul className="contacts-list">
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" :src="user1" alt="User Avatar">

                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">
                                                            Count Dracula
                                                            <small
                                                                className="contacts-list-date float-right">2/28/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">How have you been? I
                                                            was...</span>
                                                    </div>
                                                    <!-- /.contacts-list-info -->
                                                </a>
                                            </li>
                                            <!-- End Contact Item -->
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" :src="user7" alt="User Avatar">

                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">
                                                            Sarah Doe
                                                            <small
                                                                className="contacts-list-date float-right">2/23/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">I will be waiting for...</span>
                                                    </div>
                                                    <!-- /.contacts-list-info -->
                                                </a>
                                            </li>
                                            <!-- End Contact Item -->
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" :src="user3" alt="User Avatar">

                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">
                                                            Nadia Jolie
                                                            <small
                                                                className="contacts-list-date float-right">2/20/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">I'll call you back at...</span>
                                                    </div>
                                                    <!-- /.contacts-list-info -->
                                                </a>
                                            </li>
                                            <!-- End Contact Item -->
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" :src="user5" alt="User Avatar">

                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">
                                                            Nora S. Vans
                                                            <small
                                                                className="contacts-list-date float-right">2/10/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">Where is your new...</span>
                                                    </div>
                                                    <!-- /.contacts-list-info -->
                                                </a>
                                            </li>
                                            <!-- End Contact Item -->
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" :src="user6" alt="User Avatar">

                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">
                                                            John K.
                                                            <small
                                                                className="contacts-list-date float-right">1/27/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">Can I take a look at...</span>
                                                    </div>
                                                    <!-- /.contacts-list-info -->
                                                </a>
                                            </li>
                                            <!-- End Contact Item -->
                                            <li>
                                                <a href="#">
                                                    <img className="contacts-list-img" :src="user8" alt="User Avatar">

                                                    <div className="contacts-list-info">
                                                        <span className="contacts-list-name">
                                                            Kenneth M.
                                                            <small
                                                                className="contacts-list-date float-right">1/4/2015</small>
                                                        </span>
                                                        <span className="contacts-list-msg">Never mind I found...</span>
                                                    </div>
                                                    <!-- /.contacts-list-info -->
                                                </a>
                                            </li>
                                            <!-- End Contact Item -->
                                        </ul>
                                        <!-- /.contacts-list -->
                                    </div>
                                    <!-- /.direct-chat-pane -->
                                </div>
                                <!-- /.card-body -->
                                <div className="card-footer">
                                    <form action="#" method="post">
                                        <div className="input-group">
                                            <input type="text" name="message" placeholder="Type Message ..."
                                                className="form-control">
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-primary">Send</button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                                <!-- /.card-footer-->
                            </div>
                            <!--/.direct-chat -->

                            <!-- TO DO List -->
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="ion ion-clipboard mr-1"></i>
                                        To Do List
                                    </h3>

                                    <div className="card-tools">
                                        <ul className="pagination pagination-sm">
                                            <li className="page-item"><a href="#" className="page-link">&laquo;</a></li>
                                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                                            <li className="page-item"><a href="#" className="page-link">3</a></li>
                                            <li className="page-item"><a href="#" className="page-link">&raquo;</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div className="card-body">
                                    <ul className="todo-list" data-widget="todo-list">
                                        <li>
                                            <!-- drag handle -->
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <!-- checkbox -->
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo1" id="todoCheck1">
                                                <label for="todoCheck1"></label>
                                            </div>
                                            <!-- todo text -->
                                            <span className="text">Design a nice theme</span>
                                            <!-- Emphasis label -->
                                            <small className="badge badge-danger"><i className="far fa-clock"></i> 2
                                                mins</small>
                                            <!-- General tools such as edit or delete-->
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo2" id="todoCheck2" checked>
                                                <label for="todoCheck2"></label>
                                            </div>
                                            <span className="text">Make the theme responsive</span>
                                            <small className="badge badge-info"><i className="far fa-clock"></i> 4
                                                hours</small>
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo3" id="todoCheck3">
                                                <label for="todoCheck3"></label>
                                            </div>
                                            <span className="text">Let theme shine like a star</span>
                                            <small className="badge badge-warning"><i className="far fa-clock"></i> 1
                                                day</small>
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo4" id="todoCheck4">
                                                <label for="todoCheck4"></label>
                                            </div>
                                            <span className="text">Let theme shine like a star</span>
                                            <small className="badge badge-success"><i className="far fa-clock"></i> 3
                                                days</small>
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo5" id="todoCheck5">
                                                <label for="todoCheck5"></label>
                                            </div>
                                            <span className="text">Check your messages and notifications</span>
                                            <small className="badge badge-primary"><i className="far fa-clock"></i> 1
                                                week</small>
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo6" id="todoCheck6">
                                                <label for="todoCheck6"></label>
                                            </div>
                                            <span className="text">Let theme shine like a star</span>
                                            <small className="badge badge-secondary"><i className="far fa-clock"></i> 1
                                                month</small>
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- /.card-body -->
                                <div className="card-footer clearfix">
                                    <button type="button" className="btn btn-primary float-right"><i
                                            className="fas fa-plus"></i> Add
                                        item</button>
                                </div>
                            </div>
                            <!-- /.card -->
                        </section>
                        <!-- /.Left col -->
                        <!-- right col (We are only adding the ID to make the widgets sortable)-->
                        <section className="col-lg-5 connectedSortable">

                            <!-- Map card -->
                            <div className="card bg-gradient-primary">
                                <div className="card-header border-0">
                                    <h3 className="card-title">
                                        <i className="fas fa-map-marker-alt mr-1"></i>
                                        Visitors
                                    </h3>
                                    <!-- card tools -->
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-primary btn-sm daterange"
                                            title="Date range">
                                            <i className="far fa-calendar-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse"
                                            title="Collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                    <!-- /.card-tools -->
                                </div>
                                <div className="card-body">
                                    <div id="world-map" style="height: 250px; width: 100%;"></div>
                                </div>
                                <!-- /.card-body-->
                                <div className="card-footer bg-transparent">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <div id="sparkline-1"></div>
                                            <div className="text-white">Visitors</div>
                                        </div>
                                        <!-- ./col -->
                                        <div className="col-4 text-center">
                                            <div id="sparkline-2"></div>
                                            <div className="text-white">Online</div>
                                        </div>
                                        <!-- ./col -->
                                        <div className="col-4 text-center">
                                            <div id="sparkline-3"></div>
                                            <div className="text-white">Sales</div>
                                        </div>
                                        <!-- ./col -->
                                    </div>
                                    <!-- /.row -->
                                </div>
                            </div>
                            <!-- /.card -->

                            <!-- solid sales graph -->
                            <div className="card bg-gradient-info">
                                <div className="card-header border-0">
                                    <h3 className="card-title">
                                        <i className="fas fa-th mr-1"></i>
                                        Sales Graph
                                    </h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <canvas className="chart" id="line-chart"
                                        style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                                </div>
                                <!-- /.card-body -->
                                <div className="card-footer bg-transparent">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <input type="text" className="knob" data-readonly="true" value="20"
                                                data-width="60" data-height="60" data-fgColor="#39CCCC">

                                            <div className="text-white">Mail-Orders</div>
                                        </div>
                                        <!-- ./col -->
                                        <div className="col-4 text-center">
                                            <input type="text" className="knob" data-readonly="true" value="50"
                                                data-width="60" data-height="60" data-fgColor="#39CCCC">

                                            <div className="text-white">Online</div>
                                        </div>
                                        <!-- ./col -->
                                        <div className="col-4 text-center">
                                            <input type="text" className="knob" data-readonly="true" value="30"
                                                data-width="60" data-height="60" data-fgColor="#39CCCC">

                                            <div className="text-white">In-Store</div>
                                        </div>
                                        <!-- ./col -->
                                    </div>
                                    <!-- /.row -->
                                </div>
                                <!-- /.card-footer -->
                            </div>
                            <!-- /.card -->

                            <!-- Calendar -->
                            <div className="card bg-gradient-success">
                                <div className="card-header border-0">

                                    <h3 className="card-title">
                                        <i className="far fa-calendar-alt"></i>
                                        Calendar
                                    </h3>
                                    <!-- tools card -->
                                    <div className="card-tools">
                                        <!-- button with a dropdown -->
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-success btn-sm dropdown-toggle"
                                                data-toggle="dropdown" data-offset="-52">
                                                <i className="fas fa-bars"></i>
                                            </button>
                                            <div className="dropdown-menu" role="menu">
                                                <a href="#" className="dropdown-item">Add new event</a>
                                                <a href="#" className="dropdown-item">Clear events</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#" className="dropdown-item">View calendar</a>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-sm"
                                            data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    <!-- /. tools -->
                                </div>
                                <!-- /.card-header -->
                                <div className="card-body pt-0">
                                <!--The calendar -->
                                <div id="calendar" style="width: 100%"></div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </section>
                    <!-- right col -->
                </div>
                <!-- /.row (main row) -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</BackendLayout></template>
  

  