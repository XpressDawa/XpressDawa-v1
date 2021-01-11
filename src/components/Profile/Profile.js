import React, { Component } from "react";
import "./Profile.css";
// https://codepen.io/YinkaEnoch/pen/PxqrZV
class Profile extends Component {
  render() {
    return (
      <>
      <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                <h6 class="f-w-600">Hembo Tingor</h6>
                                <button class='btn-primary'>Edit Prfile</button> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Pincode</p>
                                        <h6 class="text-muted f-w-400">211012</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Phone no.</p>
                                        <h6 class="text-muted f-w-400">98979989898</h6>
                                    </div>
                                </div>
                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Place an Order</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        
                                        <p class="btn" style={{color:'blue'}}>New-Order</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="btn">Order From Recent Orders</p>
                                    </div>
                                </div>
                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      </>
    );
  }
}
export default Profile;
/// fas fa-ambulance

// <p class="m-b-10 f-w-600" style={{color:'blue'}}>New-Order</p>
// <h6 class="text-muted f-w-400">Sam Disuja</h6>
//<p class="m-b-10 f-w-600">Order From Recent Orders</p>
// <h6 class="text-muted f-w-400">Dinoter husainm</h6>
