import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}

  readonly baseURL = 'https://localhost:44302/api/PaymentDetails';
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  // function create
  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  // function update
  putPaymentDetail() {
    return this.http.put(
      `${this.baseURL}/${this.formData.PaymentDetailId}`,
      this.formData
    );
  }

  // function delete
  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => (this.list = res as PaymentDetail[]));
  }
}
