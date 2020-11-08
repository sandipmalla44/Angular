import { Component, Input } from '@angular/core';
import { IProperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent{
@Input() property : IProperty;
}
