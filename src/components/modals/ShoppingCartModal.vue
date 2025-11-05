<script setup></script>

<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 class="modal-title" id="myModalLabel">쇼핑카트</h4>
                            </div>
                            <div class="modal-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>
                                                앨범정보
                                            </th>
                                            <th>
                                                가격
                                            </th>
                                            <th>
                                                수량
                                            </th>
                                            <th>
                                                합계
                                            </th>
                                            <th>
                                                삭제
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="albuminfo">
                                                <img src="">
                                                <div class="info">
                                                    <h4>Lovelyz 4th Mini AlbumLovelyz 4th Mini Album</h4>
                                                    <span>
                                                        <i class="fa fa-microphone"> 아티스트</i> 
                                                        <p>러블리즈(Lovelyz)</p>
                                                    </span>
                                                    <span>
                                                        <i class="fa  fa-calendar"> 발매일</i> 
                                                        <p>2018.04.23</p>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="albumprice">
                                                ￦ 20,000
                                            </td>
                                            <td class="albumqty">
                                                <input type="number" class="form-control" value="1">
                                            </td>
                                            <td class="pricesum">
                                                ￦ 20,000
                                            </td>
                                            <td>
                                                <button class="btn btn-default">
                                                    <i class="fa fa-trash-o"></i> 삭제
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="totalprice text-right">
                                    <h3>총 합계금액 : <span>￦20,000</span> 원</h3>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
                                <button type="button" class="btn btn-primary">결제하기</button>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<style scoped></style>