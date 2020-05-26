import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  beingEdited: string = null;
  equipments= [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'];
  constructor() { }

  ngOnInit() {
  }
add(equipment)
{
  if (!(this.equipments.includes(equipment)) && equipment !== '')
  {
    this.equipments.push(equipment);
  }
}

  remove(equipment) {
    let index = this.equipments.indexOf(equipment);
    this.equipments.splice(index, 1);
  }

  edit(equipment) {
    this.beingEdited = equipment;
  }

 save(newEquipment,equipment) {
  let index = this.equipments.indexOf(equipment);
  this.equipments[index] = newEquipment;
  this.beingEdited = null;
}
}
