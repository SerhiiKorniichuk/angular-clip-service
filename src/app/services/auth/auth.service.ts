import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore'
import { map, Observable } from 'rxjs'
import IUser from 'src/app/models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<Omit<IUser, 'password'>>
  public isAuthentificated$: Observable<boolean>

  constructor(
    private fireAuth: AngularFireAuth,
    private fireDatabase: AngularFirestore
  ) {
    this.userCollection = this.fireDatabase.collection('users')
    this.isAuthentificated$ = this.fireAuth.user.pipe(map((user) => !!user))
  }

  public async createUser(userData: IUser) {
    const { name, email, password, phoneNumber, age } = userData

    // Creating a new user
    const userCredential = await this.fireAuth.createUserWithEmailAndPassword(
      email,
      password
    )

    if (!userCredential.user) {
      throw new Error('User can`t be found.')
    }

    // Adding new user in collection
    await this.userCollection.doc(userCredential.user.uid).set({
      name,
      email,
      phoneNumber,
      age
    })

    // Updating user display name in profile
    await userCredential.user.updateProfile({
      displayName: userData.name
    })
  }
}
